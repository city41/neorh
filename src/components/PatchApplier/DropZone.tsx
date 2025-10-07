import { CSSProperties, ReactNode, useState } from "react";
import clsx from "clsx";

type DropZoneProps = {
  className?: string;
  obtainedClassName?: string;
  obtained?: boolean;
  fileName?: string;
  style?: CSSProperties;
  onData: (data: Uint8Array) => void;
  children: (clickToChoose: ReactNode) => ReactNode;
};

function DropZone({
  className,
  obtainedClassName,
  obtained,
  fileName,
  style,
  onData,
  children,
}: DropZoneProps) {
  const [fileOver, setFileOver] = useState(false);

  function handleFileChosen(file: File) {
    const reader = new FileReader();
    reader.addEventListener("loadend", () => {
      const data = new Uint8Array(reader.result as ArrayBuffer);
      onData(data);
    });
    reader.readAsArrayBuffer(file);
  }

  const orClickToChoose = (
    <label className="cursor-pointer text-blue-800 underline">
      or click here to choose
      <input
        style={{ width: 0.01, height: 0.01 }}
        type="file"
        accept=".zip"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            handleFileChosen(file);
          }
        }}
      />
    </label>
  );

  if (obtained) {
    return <div className={clsx(obtainedClassName)}>OK! Got {fileName}</div>;
  } else {
    return (
      <div
        className={clsx(className, {
          "bg-gray-400": fileOver,
        })}
        style={style}
        onDragOver={(e) => {
          e.preventDefault();
          setFileOver(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setFileOver(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          const file = e.dataTransfer.files?.[0];

          if (file) {
            handleFileChosen(file);
          }
        }}
      >
        {children(orClickToChoose)}
      </div>
    );
  }
}

export { DropZone };
