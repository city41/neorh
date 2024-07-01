import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { RomHack, RomHackGameEntry } from "@/types";
import { PatchApplier } from "../PatchApplier";
import { MetaEntry } from "./MetaEntry";
import { HackEntry } from "./HackEntry";
import { A } from "../A";

type PublicGamePageProps = {
  game: RomHackGameEntry;
  focusedHackId?: string;
};

function getSortedHacks(
  hacks: RomHack[],
  focusedHackId: string | undefined
): RomHack[] {
  if (!focusedHackId) {
    return hacks;
  }

  const openHack = hacks.find((h) => h.id === focusedHackId);

  if (!openHack) {
    return hacks;
  }

  const hacksWithoutOpen = hacks.filter((h) => h.id !== focusedHackId);

  return [openHack, ...hacksWithoutOpen];
}

function GamePage({ game, focusedHackId }: PublicGamePageProps) {
  const [chosenHacks, setChosenHacks] = useState<RomHack[]>([]);
  const [openHacks, setOpenHacks] = useState<string[]>(
    focusedHackId ? [focusedHackId] : []
  );

  const logoImg = require(`../../logos/${game.mameName}.png`).default;

  return (
    <>
      <div className="flex flex-col items-center bg-black -mx-8 mb-12">
        <Link href={`/${game.mameName}`} className="self-end">
          <h1 className="font-bold text-white pt-2 pr-2 -mb-4">
            {game.gameName}
          </h1>
        </Link>
        <Link
          href={`/${game.mameName}`}
          className="w-full grid place-items-center"
        >
          <Image
            width={logoImg.width}
            height={logoImg.height}
            src={logoImg.src}
            alt={`${game.gameName} logo`}
            className="w-1/2"
            style={{ imageRendering: "pixelated" }}
            priority
          />
        </Link>
        <div className="flex flex-row text-white self-start pl-4 gap-x-8 pb-1">
          <MetaEntry metaKey="developer" value={game.developer} />
          <MetaEntry metaKey="year" value={game.year} />
        </div>
      </div>

      {game.mameName === "kof94" && (
        <div className="flex flex-col">
          <div className="bg-green-300 border-2 border-green-800 px-4 py-2 flex flex-col gap-y-2 mb-8 w-full sm:w-1/3 sm:self-end">
            <p>
              Looking for the original KOF94TE website?{" "}
              <A href="https://kof94te.mattgreer.dev">It has moved here</A>.
            </p>
          </div>
        </div>
      )}

      <h3 className="font-bold text-lg">First: Choose your hacks</h3>
      <ul className="sm:ml-4">
        {getSortedHacks(game.hacks, focusedHackId).map((h) => {
          return (
            <li key={h.id}>
              <label className="flex flex-row my-2">
                <input
                  type="checkbox"
                  className="self-start mt-1 cursor-pointer"
                  checked={
                    chosenHacks.filter((ch) => ch.id === h.id).length === 1
                  }
                  onChange={(e) => {
                    setChosenHacks((chs) => {
                      if (e.target.checked) {
                        let added = [...chs, h];

                        // TODO: remove this hack
                        if (h.id === "te95") {
                          added = added.filter((ah) => ah.id !== "te94");
                        }

                        if (h.id === "te94") {
                          added = added.filter((ah) => ah.id !== "te95");
                        }

                        if (h.id === "precise-controls") {
                          added = added.filter((ah) => ah.id !== "rotary");
                        }

                        if (h.id === "rotary") {
                          added = added.filter(
                            (ah) => ah.id !== "precise-controls"
                          );
                        }

                        return Array.from(new Set(added));
                      } else {
                        const removed = chs.filter((ch) => ch !== h);

                        return Array.from(new Set(removed));
                      }
                    });
                  }}
                />
                <HackEntry
                  className="ml-4"
                  game={game}
                  hack={h}
                  showDetails={openHacks.includes(h.id)}
                  isFocused={h.id === focusedHackId}
                  onToggleClick={() => {
                    setOpenHacks((oh) => {
                      if (oh.includes(h.id)) {
                        return oh.filter((hhh) => hhh !== h.id);
                      }

                      return [...oh, h.id];
                    });
                  }}
                />
              </label>
            </li>
          );
        })}
      </ul>
      {chosenHacks.length > 0 && (
        <div className="mt-8">
          <h3 className="font-bold text-lg mb-2">
            Next: Provide the original ROM
          </h3>
          <PatchApplier game={game} chosenHacks={chosenHacks} />
        </div>
      )}
    </>
  );
}

export { GamePage };
export type { PublicGamePageProps };
