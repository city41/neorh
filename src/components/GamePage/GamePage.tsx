import { useState } from "react";
import { RomHack, RomHackGameEntry } from "@/types";
import { PatchApplier } from "../PatchApplier";

type PublicGamePageProps = {
  game: RomHackGameEntry;
};

function GamePage({ game }: PublicGamePageProps) {
  const [chosenHacks, setChosenHacks] = useState<RomHack[]>([]);

  return (
    <div className="w-full sm:py-16">
      <div className="mx-auto w-full lg:max-w-4xl bg-white px-8 pb-4 lg:shadow-2xl lg:rounded-2xl">
        <h1>{game.gameName}</h1>
        <p>Choose your hacks</p>
        <ul>
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

        <PatchApplier game={game} chosenHacks={chosenHacks} />
      </div>
    </div>
  );
}

export { GamePage };
export type { PublicGamePageProps };
