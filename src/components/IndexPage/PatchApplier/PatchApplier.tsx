import clsx from "clsx";
import { DropZone } from "./DropZone";
import { useCallback, useEffect, useState } from "react";
import { unzip } from "./unzip";
import { zip } from "./zip";
import { validateFiles } from "./validateFiles";
import { RomFileEntry } from "./types";
import { applyPatches } from "./applyPatches";
import { getPatch } from "./getPatch";
import { sendBlobToAnchorTag } from "./sendBlobToAnchorTag";

type PatchApplierProps = {
  className?: string;
};

function DownloadButton({
  className,
  ...rest
}: JSX.IntrinsicElements["button"]) {
  return (
    <button
      className={clsx(className, "px-8 py-4 border-2 border-blue-800")}
      {...rest}
    />
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

    zip(patchedRomFiles).then((zippedRom) => {
      const fileBlob = new Blob([zippedRom.buffer], {
        type: "application/octet-stream",
      });

      sendBlobToAnchorTag(fileBlob, "kof94te.zip");
    });
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
        <div className="flex flex-row justify-around py-8">
          <DownloadButton>
            <div>download as .neo file</div>
            <div>For use on NeoSD or MiSTer</div>
          </DownloadButton>
          <DownloadButton onClick={handleDownloadZip}>
            <div>download as MAME .zip file</div>
            <div>For use on emulators</div>
          </DownloadButton>
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
