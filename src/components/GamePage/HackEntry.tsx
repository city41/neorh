import { useState } from "react";
import { RomHack, RomHackGameEntry } from "@/types";
import clsx from "clsx";
import { MetaEntry } from "./MetaEntry";
import { ScreenshotCarousel } from "./ScreenshotCarousel";

type HackEntryProps = {
  className: string;
  game: RomHackGameEntry;
  hack: RomHack;
};

function HackEntry({ className, game, hack }: HackEntryProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={clsx(className, "flex flex-col")}>
      <div className="flex flex-row gap-x-2">
        <div>{hack.name}</div>
        <a
          className="text-blue-700 hover:underline cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            setShowDetails((sd) => !sd);
          }}
        >
          ({showDetails ? "hide" : "details"})
        </a>
      </div>
      {showDetails && (
        <div className="mb-8 mr-2 w-full">
          <ScreenshotCarousel
            gameMameName={game.mameName}
            hackId={hack.id}
            screenshots={hack.screenshots}
          />
          <div className="flex flex-col my-4 gap-y-2 bg-gray-200 p-2">
            {hack.details.map((d) => {
              return <p key={d}>{d}</p>;
            })}
          </div>

          <div className="flex flex-row gap-x-4">
            <MetaEntry
              metaKey={hack.creators.length === 1 ? "Creator" : "Creators"}
              value={hack.creators.join(", ")}
            />
            {hack.website && (
              <MetaEntry metaKey="Website" value={hack.website} hyperlink />
            )}
            {hack.youtube && (
              <MetaEntry metaKey="YouTube" value={hack.youtube} hyperlink />
            )}
            {hack.repo && (
              <MetaEntry metaKey="GitHub" value={hack.repo} hyperlink />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export { HackEntry };
