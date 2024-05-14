import Image from "next/image";
import clsx from "clsx";
import { MouseEventHandler, useCallback, useEffect, useState } from "react";
import { DropZone } from "./DropZone";
import { unzip } from "./unzip";
import { zip } from "./zip";
import { validateFiles } from "./validateFiles";
import { RomFileEntry } from "./types";
import { applyPatches } from "./applyPatches";
import { getPatch } from "./getPatch";
import { sendBlobToAnchorTag } from "./sendBlobToAnchorTag";
import {
  buildNeoFile,
  ConvertOptions,
  FilesInMemory,
} from "neosdconv/lib/buildNeoFile";
import { Genre } from "neosdconv/lib/genres";

import fontBeforePng from "./fontBefore.png";
import fontAfterPng from "./fontAfter.png";
import { patchInCleanFont } from "./patchInCleanFont";

type PatchApplierProps = {
  className?: string;
};

function DownloadButton({
  className,
  onClick,
  children,
  ...rest
}: JSX.IntrinsicElements["button"]) {
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

  return (
    <button
      className={clsx(
        className,
        "px-8 py-4 border-2 border-blue-800 bg-blue-200 hover:bg-blue-800 hover:text-white"
      )}
      onClick={handleClick}
      {...rest}
    >
      {clicked ? "just a moment ..." : children}
    </button>
  );
}

function PatchApplier({ className }: PatchApplierProps) {
  const [zipData, setZipData] = useState<Uint8Array | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [patchedRomFiles, setPatchedRomFiles] = useState<RomFileEntry[] | null>(
    null
  );
  const [cleanUpFont, setCleanUpFont] = useState<boolean>(false);
  const [showCleanUpExplanation, setShowCleanUpExplanation] =
    useState<boolean>(false);

  useEffect(() => {
    if (zipData !== null) {
      unzip(zipData)
        .then((unzippedFiles) => {
          return validateFiles(unzippedFiles).then(() => {
            return getPatch().then((patchFiles) => {
              const patchedRomFiles = applyPatches(unzippedFiles, patchFiles);
              setPatchedRomFiles(patchedRomFiles);
              setErrorMsg(null);
            });
          });
        })
        .catch((e: Error) => {
          setErrorMsg(e.message);
          setPatchedRomFiles(null);
        });
    }
  }, [zipData, setErrorMsg, setPatchedRomFiles]);

  const handleDownloadZip = useCallback(() => {
    if (!patchedRomFiles) {
      throw new Error(
        "handleDownloadZip: patchedRomFiles is unexpectedly null"
      );
    }

    if (cleanUpFont) {
      return patchInCleanFont(patchedRomFiles).then(
        (romFilesWithCleanedupFont) => {
          return zip(romFilesWithCleanedupFont).then((zippedRom) => {
            const fileBlob = new Blob([zippedRom.buffer], {
              type: "application/octet-stream",
            });

            sendBlobToAnchorTag(fileBlob, "kof94te.zip");
          });
        }
      );
    } else {
      return zip(patchedRomFiles).then((zippedRom) => {
        const fileBlob = new Blob([zippedRom.buffer], {
          type: "application/octet-stream",
        });

        sendBlobToAnchorTag(fileBlob, "kof94te.zip");
      });
    }
  }, [patchedRomFiles, cleanUpFont]);

  const handleNeoSD = useCallback(() => {
    if (!patchedRomFiles) {
      throw new Error("handleNeoSD: patchedRomFiles is unexpectedly null");
    }

    const convertOptions: ConvertOptions = {
      genre: Genre.Fighting,
      manufacturer: "SNK_city41",
      name: "The King of Fighters '94:TE Hack",
      year: 2024,
      ngh: "55",
    };

    if (cleanUpFont) {
      return patchInCleanFont(patchedRomFiles).then(
        (romFilesWithCleanedUpFont) => {
          const filesInMemory: FilesInMemory =
            romFilesWithCleanedUpFont.reduce<FilesInMemory>((accum, f) => {
              accum[f.fileName] = f.data;
              return accum;
            }, {});

          const neoFile = buildNeoFile(convertOptions, filesInMemory);
          const neoFileBlob = new Blob([neoFile.buffer], {
            type: "application/octet-stream",
          });

          sendBlobToAnchorTag(neoFileBlob, "kof94te.neo");
        }
      );
    } else {
      const filesInMemory: FilesInMemory =
        patchedRomFiles.reduce<FilesInMemory>((accum, f) => {
          accum[f.fileName] = f.data;
          return accum;
        }, {});

      const neoFile = buildNeoFile(convertOptions, filesInMemory);
      const neoFileBlob = new Blob([neoFile.buffer], {
        type: "application/octet-stream",
      });

      sendBlobToAnchorTag(neoFileBlob, "kof94te.neo");

      return Promise.resolve();
    }
  }, [patchedRomFiles, cleanUpFont]);

  return (
    <div className={clsx(className, "flex flex-col")}>
      <DropZone
        className="rounded-lg border-dashed border-4 border-gray-500 p-4 flex justify-center items-center"
        onData={(data) => setZipData(data)}
      >
        {(clickToChoose) => {
          return (
            <div>
              Drag <b>kof94.zip</b> from MAME here, {clickToChoose}
            </div>
          );
        }}
      </DropZone>
      {patchedRomFiles && (
        <>
          <div className="grid place-items-center">
            <div className="flex flex-row gap-x-2 my-4">
              <input
                type="checkbox"
                checked={cleanUpFont}
                onChange={() => setCleanUpFont((cuf) => !cuf)}
              />
              Clean up the main font too. (
              <a
                className="cursor-pointer"
                onClick={() => setShowCleanUpExplanation((scue) => !scue)}
              >
                what is this?
              </a>
              )
            </div>
          </div>
          {showCleanUpExplanation && (
            <div>
              <div className="flex flex-row justify-around">
                <Image
                  className="shadow-xl"
                  src={fontBeforePng.src}
                  width={fontBeforePng.width}
                  height={fontBeforePng.height}
                  alt="Font without the clean up patch"
                />
                <Image
                  className="shadow-xl"
                  src={fontAfterPng.src}
                  width={fontAfterPng.width}
                  height={fontAfterPng.height}
                  alt="Font with the clean up patch"
                />
              </div>
              <p className="grid place-items-center my-4">
                An optional add on that cleans up the main font a bit. It just
                adds a 1 pixel gap, making it look cleaner.
              </p>
            </div>
          )}
          <div className="flex flex-row flex-wrap justify-around py-8 gap-8 px-8">
            <DownloadButton onClick={handleNeoSD} className="flex-1">
              <div>download as .neo file</div>
              <div>For use on NeoSD or MiSTer</div>
            </DownloadButton>
            <DownloadButton onClick={handleDownloadZip} className="flex-1">
              <div>download as MAME .zip file</div>
              <div>For use on emulators</div>
            </DownloadButton>
          </div>
        </>
      )}
      {errorMsg && (
        <div className="bg-red-300 text-black mt-4 p-2">
          <div>
            An error occured. Make sure this is kof94.zip meant for recent
            versions of MAME.
          </div>
          <div>{errorMsg}</div>
        </div>
      )}
    </div>
  );
}

export { PatchApplier };
