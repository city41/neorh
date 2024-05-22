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
import { tagPatchedFiles } from "./tagPatchedFiles";

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
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [patchedRomFiles, setPatchedRomFiles] = useState<RomFileEntry[] | null>(
    null
  );

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

    return zip(patchedRomFiles).then((zippedRom) => {
      const fileBlob = new Blob([zippedRom.buffer], {
        type: "application/octet-stream",
      });

      sendBlobToAnchorTag(fileBlob, "kof94te.zip");
    });
  }, [patchedRomFiles]);

  const handleDownloadFBNeoZip = useCallback(() => {
    if (!patchedRomFiles) {
      throw new Error(
        "handleDownloadFBNeoZip: patchedRomFiles is unexpectedly null"
      );
    }

    const finalFiles = tagPatchedFiles(patchedRomFiles, "te").filter(
      (f) => f.patched
    );

    return zip(finalFiles).then((zippedRom) => {
      const fileBlob = new Blob([zippedRom.buffer], {
        type: "application/octet-stream",
      });

      sendBlobToAnchorTag(fileBlob, "kof94te.zip");
    });
  }, [patchedRomFiles]);

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

    const filesInMemory: FilesInMemory = patchedRomFiles.reduce<FilesInMemory>(
      (accum, f) => {
        accum[f.fileName] = f.data;
        return accum;
      },
      {}
    );

    const neoFile = buildNeoFile(convertOptions, filesInMemory);
    const neoFileBlob = new Blob([neoFile.buffer], {
      type: "application/octet-stream",
    });

    sendBlobToAnchorTag(neoFileBlob, "kof94te.neo");

    return Promise.resolve();
  }, [patchedRomFiles]);

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
