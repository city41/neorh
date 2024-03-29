import clsx from "clsx";
import { DropZone } from "./DropZone";

type PatchApplierProps = {
  className?: string;
};

function PatchApplier({ className }: PatchApplierProps) {
  function handleData(data: Uint8Array) {}

  return (
    <div className={clsx(className, "flex flex-col")}>
      <DropZone
        className="rounded-lg border-dashed border-4 border-gray-500 p-4 flex justify-center items-center"
        onData={handleData}
      >
        {(clickToChoose) => {
          return (
            <div>
              Drag <b>kof94.zip</b> from MAME here, {clickToChoose}
            </div>
          );
        }}
      </DropZone>
    </div>
  );
}

export { PatchApplier };
