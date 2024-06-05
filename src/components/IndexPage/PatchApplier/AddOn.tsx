import Image from "next/image";
import { StaticImageData } from "next/image";
import { useState } from "react";

type AddOnProps = {
  className?: string;
  title: string;
  description: string;
  screenshot: StaticImageData;
  onClick: () => void;
};

function AddOn({
  className,
  title,
  description,
  screenshot,
  onClick,
}: AddOnProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <input id={title} type="checkbox" onChange={onClick} />
      <label className="ml-2" htmlFor={title}>
        {title}
      </label>{" "}
      <a className="cursor-pointer" onClick={() => setShowDetails((sd) => !sd)}>
        ({showDetails ? "close" : "info"})
      </a>
      {showDetails && (
        <div className="ml-4 px-4 py-4 xborder xborder-gray-600 grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-x-4 gap-y-4 shadow-2xl">
          <div>{description}</div>
          <Image
            className="shadow-xl"
            src={screenshot.src}
            width={screenshot.width}
            height={screenshot.height}
            alt={`screenshot of ${title}`}
          />
        </div>
      )}
    </div>
  );
}

export { AddOn };
