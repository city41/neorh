import clsx from "clsx";
import { RomHack, RomHackGameEntry } from "@/types";
import { MetaEntry } from "./MetaEntry";
import { ScreenshotCarousel } from "./ScreenshotCarousel";

type HackEntryProps = {
  className: string;
  game: RomHackGameEntry;
  hack: RomHack;
  isFocused: boolean;
  showDetails: boolean;
  onToggleClick: () => void;
};

function HackEntry({
  className,
  game,
  hack,
  isFocused,
  showDetails,
  onToggleClick,
}: HackEntryProps) {
  return (
    <div
      className={clsx(className, "flex flex-col", { "mb-16": isFocused })}
      id={hack.id}
    >
      <div className="flex flex-row gap-x-2">
        <div
          className={clsx("cursor-pointer", {
            "font-bold text-lg": isFocused,
          })}
        >
          {hack.name}
        </div>
        <a
          className="text-blue-700 hover:underline cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            onToggleClick();
          }}
        >
          ({showDetails ? "hide" : "details"})
        </a>
      </div>
      {showDetails && (
        <div
          className="mb-8 mr-0 sm:mr-2"
          onClick={(e) => {
            const t = e.target as HTMLElement;
            if (t.tagName?.toLowerCase() !== "a") {
              e.preventDefault();
            }
          }}
        >
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

          <div className="flex flex-row flex-wrap gap-x-4">
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
            <MetaEntry
              metaKey="ips files"
              value={`/ips/${game.mameName}/${hack.zip}`}
              hyperlink
            />
            <MetaEntry
              metaKey="permalink"
              value={`/${game.mameName}/${hack.id}`}
              hyperlink
            />
          </div>
        </div>
      )}
    </div>
  );
}

export { HackEntry };
