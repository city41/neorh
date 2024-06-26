import { useState } from "react";
import { RomHack } from "@/types";
import clsx from "clsx";
import { MetaEntry } from "./MetaEntry";

type HackEntryProps = {
  className: string;
  hack: RomHack;
};

function HackEntry({ className, hack }: HackEntryProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={clsx(className, "flex flex-col")}>
      <div className="flex flex-row gap-x-2">
        <div>{hack.name}</div>
        <a
          className="text-blue-700 cursor-pointer text-sm align-baseline"
          onClick={(e) => {
            e.preventDefault();
            setShowDetails((sd) => !sd);
          }}
        >
          ({showDetails ? "hide" : "details"})
        </a>
      </div>
      {showDetails && (
        <div className="mb-8">
          <div className="flex flex-col my-4 gap-y-2 bg-gray-200 p-2">
            {hack.details.map((d) => {
              return <p key={d}>{d}</p>;
            })}
          </div>
          <MetaEntry
            metaKey={hack.creators.length === 1 ? "Creator" : "Creators"}
            value={hack.creators.join(", ")}
          />
          {hack.repo && (
            <MetaEntry metaKey="GitHub" value={hack.repo} hyperlink />
          )}
        </div>
      )}
    </div>
  );
}

export { HackEntry };
