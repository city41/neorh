import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import { RomHack, RomHackGameEntry } from "@/types";
import { PatchApplier } from "../PatchApplier";
import { MetaEntry } from "./MetaEntry";

type PublicGamePageProps = {
  game: RomHackGameEntry;
};

function GamePage({ game }: PublicGamePageProps) {
  const [chosenHacks, setChosenHacks] = useState<RomHack[]>([]);

  const logoImg = require(`../../logos/${game.mameName}.png`).default;

  return (
    <>
      <div className="flex flex-col items-center bg-black -mx-8 mb-12">
        <h1 className="font-bold self-end text-white pt-2 pr-2 -mb-4">
          {game.gameName}
        </h1>
        <Image
          width={logoImg.width}
          height={logoImg.height}
          src={logoImg.src}
          alt={`${game.gameName} logo`}
          className="w-1/2"
          style={{ imageRendering: "pixelated" }}
          priority
        />
        <div className="flex flex-row text-white self-start pl-4 gap-x-8 pb-1">
          <MetaEntry metaKey="developer" value={game.developer} />
          <MetaEntry metaKey="year" value={game.year} />
        </div>
      </div>

      <h3 className="font-bold text-lg">First: Choose your hacks</h3>
      <ul className="ml-4">
        {game.hacks.map((h) => {
          return (
            <li key={h.id}>
              <label className="flex flex-row my-2">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    setChosenHacks((chs) => {
                      if (e.target.checked) {
                        const added = [...chs, h];

                        return Array.from(new Set(added));
                      } else {
                        const removed = chs.filter((ch) => ch !== h);

                        return Array.from(new Set(removed));
                      }
                    });
                  }}
                />
                <div className="ml-4">{h.name}</div>
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
