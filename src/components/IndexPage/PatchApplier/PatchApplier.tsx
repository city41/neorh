import clsx from "clsx";
import { MouseEventHandler, useCallback, useEffect, useState } from "react";
import { DropZone } from "./DropZone";
import { unzip } from "./unzip";
import { zip } from "./zip";
import { validateFiles } from "./validateFiles";
import { AddOnMap, RomFileEntry, Variant } from "./types";
import { sendBlobToAnchorTag } from "./sendBlobToAnchorTag";
import {
  buildNeoFile,
  ConvertOptions,
  FilesInMemory,
} from "neosdconv/lib/buildNeoFile";
import { Genre } from "neosdconv/lib/genres";
import { tagPatchedFiles } from "./tagPatchedFiles";
import charSelectA94Png from "../charSelect_a94.png";
import cleanFontPng from "./cleanFont.png";
import cheatsheetPng from "./cheatsheet.png";
import { AddOn } from "./AddOn";
import { getFinalRom } from "./getFinalRom";

type PatchApplierProps = {
  className?: string;
};

function DownloadButton({
  className,
  onClick,
  title,
  description,
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
      className={clsx(
        className,
        "px-8 py-4 border-2 border-blue-800 bg-blue-200 hover:bg-blue-800 hover:text-white"
      )}
      onClick={handleClick}
      {...rest}
    >
      {clicked ? "just a moment ..." : body}
    </button>
  );
}

function PatchApplier({ className }: PatchApplierProps) {
  const [zipData, setZipData] = useState<Uint8Array | null>(null);
  const [unzippedSourceFiles, setUnzippedSourceFiles] = useState<
    RomFileEntry[] | null
  >(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [variant, setVariant] = useState<Variant>("a95");

  const [addOns, setAddOns] = useState<AddOnMap>({
    font: false,
    cs: false,
  });

  useEffect(() => {
    if (zipData !== null) {
      unzip(zipData)
        .then((unzippedFiles) => {
          return validateFiles(unzippedFiles).then(() => {
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

    return getFinalRom(unzippedSourceFiles, variant, addOns)
      .then((patchedRomFiles) => {
        return zip(patchedRomFiles).then((zippedRom) => {
          const fileBlob = new Blob([zippedRom.buffer], {
            type: "application/octet-stream",
          });

          sendBlobToAnchorTag(fileBlob, "kof94te.zip");
        });
      })
      .catch((e) => {
        setErrorMsg(`unexpected error: ${e.message}`);
        console.error(e);
      });
  }, [unzippedSourceFiles, variant, addOns]);

  const handleDownloadFBNeoZip = useCallback(() => {
    if (!unzippedSourceFiles) {
      throw new Error(
        "handleDownloadFBNeoZip: unzippedSourceFiles is unexpectedly null..."
      );
    }
    setErrorMsg(null);

    return getFinalRom(unzippedSourceFiles, variant, addOns)
      .then((patchedRomFiles) => {
        const finalFiles = tagPatchedFiles(patchedRomFiles, "te").filter(
          (f) => f.patched
        );

        return zip(finalFiles).then((zippedRom) => {
          const fileBlob = new Blob([zippedRom.buffer], {
            type: "application/octet-stream",
          });

          sendBlobToAnchorTag(fileBlob, "kof94te.zip");
        });
      })
      .catch((e) => {
        setErrorMsg(`unexpected error: ${e.message}`);
        console.error(e);
      });
  }, [unzippedSourceFiles, variant, addOns]);

  const handleNeoSD = useCallback(() => {
    if (!unzippedSourceFiles) {
      throw new Error("handleNeoSD: unzippedSourceFiles is unexpectedly null");
    }

    setErrorMsg(null);

    return getFinalRom(unzippedSourceFiles, variant, addOns)
      .then((patchedRomFiles) => {
        const convertOptions: ConvertOptions = {
          genre: Genre.Fighting,
          manufacturer: "SNK_city41",
          name: "The King of Fighters '94:TE Hack",
          year: 2024,
          ngh: "55",
        };

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
      })
      .catch((e) => {
        setErrorMsg(`unexpected error: ${e.message}`);
        console.error(e);
      });
  }, [unzippedSourceFiles, variant, addOns]);

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
      {unzippedSourceFiles && (
        <>
          <div className="my-4">
            <h3 className="font-bold text-xl">Optional add ons</h3>
            <div className="flex flex-col gap-y-2 my-2">
              <AddOn
                title="KOF94 style avatars"
                description="The character select avatars, created by Bunny-Head, are based on the health bar avatars in KOF94, instead of being taken from KOF95 and KOF98."
                screenshot={charSelectA94Png}
                onClick={() => {
                  setVariant((v) => {
                    if (v === "a94") {
                      return "a95";
                    } else {
                      return "a94";
                    }
                  });
                }}
              />
              <AddOn
                title="Clean Font"
                description="Cleans up the main font a bit for English and Spanish. It adds a pixel of spacing. The screenshot shows before and after."
                screenshot={cleanFontPng}
                onClick={() => {
                  setAddOns((ao) => {
                    return {
                      ...ao,
                      font: !ao.font,
                    };
                  });
                }}
              />
              <AddOn
                title="Cheat Sheet"
                description="Shows special move inputs for your current character when the game is paused. You need to be playing a single player game and in AES mode for this to work."
                screenshot={cheatsheetPng}
                onClick={() => {
                  setAddOns((ao) => {
                    return {
                      ...ao,
                      cs: !ao.cs,
                    };
                  });
                }}
              />
            </div>
            {(addOns.cs || addOns.font || variant === "a94") && (
              <p className="my-2 mt-6 p-2 border border-red-500 bg-red-300">
                <b>FBNeo users!</b> Be aware these add ons will cause FBNeo to
                warn the ROM CRCs are not what it was expecting. You can disable
                this warning or just press OK. The game will still play fine.
              </p>
            )}
          </div>

          <div className="flex flex-row flex-wrap justify-around py-8 gap-8 px-8">
            <DownloadButton
              onClick={handleNeoSD}
              title="download as .neo"
              description="for use on NeoSD or MiSTer"
            />
            <DownloadButton
              onClick={handleDownloadFBNeoZip}
              title="download as FBNeo .zip"
              description="For use on FinalBurn Neo"
            />
            <DownloadButton
              onClick={handleDownloadZip}
              title="download as MAME .zip"
              description="For use on all other emulators"
            />
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
