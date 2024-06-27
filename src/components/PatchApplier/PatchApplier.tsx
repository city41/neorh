import clsx from "clsx";
import { MouseEventHandler, useCallback, useEffect, useState } from "react";
import { DropZone } from "./DropZone";
import { unzip } from "./unzip";
import { zip } from "./zip";
import { validateFiles } from "./validateFiles";
import { RomFileEntry, RomHack, RomHackGameEntry } from "../../types";
import { sendBlobToAnchorTag } from "./sendBlobToAnchorTag";
import {
  buildNeoFile,
  ConvertOptions,
  FilesInMemory,
} from "neosdconv/lib/buildNeoFile";
import { tagPatchedFiles } from "./tagPatchedFiles";
import { getFinalRom } from "./getFinalRom";

type PatchApplierProps = {
  className?: string;
  game: RomHackGameEntry;
  chosenHacks: RomHack[];
};

function getNeosdConvFileName(
  game: RomHackGameEntry,
  actualFileName: string
): string {
  const originalFileInfo = game.originalFiles.find(
    (of) => of.fileName === actualFileName
  );

  if (!originalFileInfo) {
    throw new Error(
      `getNeosdConvFileName: failed to find a FileInfo for: ${actualFileName}`
    );
  }

  return originalFileInfo.neosdconvFileName ?? originalFileInfo.fileName;
}

function DownloadButton({
  className,
  onClick,
  title,
  description,
  disabled,
  ...rest
}: JSX.IntrinsicElements["button"] & { title: string; description: string }) {
  const [clicked, setClicked] = useState(false);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setClicked(true);
    setTimeout(() => {
      if (onClick) {
        const promise = onClick(e) as unknown as Promise<void>;
        promise.then(() => {
          setClicked(false);
        });
      }
    }, 10);
  };

  const body = (
    <div className="flex-1 flex-col gap-y-2">
      <div className="font-bold">{title}</div>
      <div>{description}</div>
    </div>
  );

  return (
    <button
      className={clsx(className, "px-8 py-4 border-2", {
        "border-blue-800 bg-blue-200 hover:bg-blue-800 hover:text-white cursor-pointer":
          !disabled,
        "border-gray-800 bg-gray-200 text-black cursor-not-allowed": disabled,
      })}
      onClick={handleClick}
      {...rest}
    >
      {clicked ? "just a moment ..." : body}
    </button>
  );
}

function PatchApplier({ className, game, chosenHacks }: PatchApplierProps) {
  const [choseDotNeo, setChoseDotNeo] = useState(false);
  const [zipData, setZipData] = useState<Uint8Array | null>(null);
  const [unzippedSourceFiles, setUnzippedSourceFiles] = useState<
    RomFileEntry[] | null
  >(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (zipData !== null) {
      unzip(zipData)
        .then((unzippedFiles) => {
          return validateFiles(unzippedFiles, game.originalFiles).then(() => {
            setUnzippedSourceFiles(unzippedFiles);
            setErrorMsg(null);
          });
        })
        .catch((e: Error) => {
          setErrorMsg(e.message);
          setUnzippedSourceFiles(null);
        });
    }
  }, [zipData, setErrorMsg, setUnzippedSourceFiles]);

  const handleDownloadZip = useCallback(() => {
    if (!unzippedSourceFiles) {
      throw new Error(
        "handleDownloadZip: unzippedSourceFiles is unexpectedly null"
      );
    }
    setErrorMsg(null);
    setChoseDotNeo(false);

    return getFinalRom(unzippedSourceFiles, game, chosenHacks)
      .then((patchedRomFiles) => {
        return zip(patchedRomFiles).then((zippedRom) => {
          const fileBlob = new Blob([zippedRom.buffer], {
            type: "application/octet-stream",
          });

          const patches = chosenHacks.map((ch) => ch.id).join("_");
          sendBlobToAnchorTag(fileBlob, `${game.mameName}_${patches}.zip`);
        });
      })
      .catch((e) => {
        setErrorMsg(`unexpected error: ${e.message}`);
        console.error(e);
      });
  }, [unzippedSourceFiles, chosenHacks]);

  const handleDownloadFBNeoZip = useCallback(() => {
    if (!unzippedSourceFiles) {
      throw new Error(
        "handleDownloadFBNeoZip: unzippedSourceFiles is unexpectedly null..."
      );
    }
    setErrorMsg(null);
    setChoseDotNeo(false);

    return getFinalRom(unzippedSourceFiles, game, chosenHacks)
      .then((patchedRomFiles) => {
        const finalFiles = tagPatchedFiles(patchedRomFiles, "te").filter(
          (f) => f.patched
        );

        return zip(finalFiles).then((zippedRom) => {
          const fileBlob = new Blob([zippedRom.buffer], {
            type: "application/octet-stream",
          });

          // TODO: this is fine for now, but this should be genericized
          sendBlobToAnchorTag(fileBlob, "kof94te.zip");
        });
      })
      .catch((e) => {
        setErrorMsg(`unexpected error: ${e.message}`);
        console.error(e);
      });
  }, [unzippedSourceFiles, chosenHacks]);

  const handleNeoSD = useCallback(() => {
    if (!unzippedSourceFiles) {
      throw new Error("handleNeoSD: unzippedSourceFiles is unexpectedly null");
    }

    setErrorMsg(null);
    setChoseDotNeo(false);

    return getFinalRom(unzippedSourceFiles, game, chosenHacks)
      .then((patchedRomFiles) => {
        const patches = chosenHacks.map((ch) => ch.id).join("_");

        const convertOptions: ConvertOptions = {
          genre: game.neosdConvertOptions.genre,
          manufacturer: game.developer,
          name: `${game.mameName}_${patches}`,
          year: game.year,
          ngh: game.neosdConvertOptions.ngh,
        };

        const filesInMemory: FilesInMemory =
          patchedRomFiles.reduce<FilesInMemory>((accum, f) => {
            accum[getNeosdConvFileName(game, f.fileName)] = f.data;
            return accum;
          }, {});

        const neoFile = buildNeoFile(convertOptions, filesInMemory);
        const neoFileBlob = new Blob([neoFile.buffer], {
          type: "application/octet-stream",
        });

        sendBlobToAnchorTag(neoFileBlob, `${game.mameName}_${patches}.neo`);
        setChoseDotNeo(true);
      })
      .catch((e) => {
        setErrorMsg(`unexpected error: ${e.message}`);
        console.error(e);
      });
  }, [game, unzippedSourceFiles, chosenHacks, choseDotNeo]);

  return (
    <div className={clsx(className, "flex flex-col")}>
      <DropZone
        className="rounded-lg border-dashed border-4 border-gray-500 p-4 flex justify-center items-center"
        onData={(data) => setZipData(data)}
      >
        {(clickToChoose) => {
          return (
            <div>
              Drag <b>{game.mameName}.zip</b> from MAME here, {clickToChoose}
            </div>
          );
        }}
      </DropZone>
      {unzippedSourceFiles && (
        <div className="mt-8">
          <h3 className="font-bold text-lg mb-2">
            Finally: Grab the patched game
          </h3>
          {chosenHacks.length === 0 && <div>Choose at least one hack</div>}
          <div className="flex flex-row flex-wrap justify-around gap-8 px-8">
            {chosenHacks.every((ch) => ch.downloadAs.includes("neosd")) && (
              <DownloadButton
                onClick={handleNeoSD}
                title="download as .neo"
                description="for use on NeoSD or MiSTer"
                disabled={chosenHacks.length === 0}
              />
            )}
            {chosenHacks.some((ch) => ch.downloadAs.includes("fbneo")) && (
              <DownloadButton
                onClick={handleDownloadFBNeoZip}
                title="download as FBNeo .zip"
                description="For use on FinalBurn Neo"
                disabled={chosenHacks.length === 0}
              />
            )}
            {chosenHacks.every((ch) => ch.downloadAs.includes("mame")) && (
              <DownloadButton
                onClick={handleDownloadZip}
                title="download as MAME .zip"
                description={
                  chosenHacks.some((ch) => ch.downloadAs.includes("fbneo"))
                    ? "For use on all other emulators"
                    : "For use on emulators"
                }
                disabled={chosenHacks.length === 0}
              />
            )}
          </div>
          {choseDotNeo && (
            <div className="bg-green-300 border-2 border-green-800 px-4 py-2 mt-8">
              Look for it on your NeoSD or MiSTer system menu by the name{" "}
              <b>
                {game.mameName}_{chosenHacks.map((ch) => ch.id).join("_")}
              </b>
            </div>
          )}
        </div>
      )}
      {errorMsg && (
        <div className="bg-red-300 text-black mt-4 p-2">
          <div>
            An error occured. Make sure this is <b>{game.mameName}.zip</b> meant
            for recent versions of MAME.
          </div>
          <div>{errorMsg}</div>
        </div>
      )}
    </div>
  );
}

export { PatchApplier };
