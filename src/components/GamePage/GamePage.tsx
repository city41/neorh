import Image from "next/image";
import { useState } from "react";
import { RomHack, RomHackGameEntry } from "@/types";
import { PatchApplier } from "../PatchApplier";

type PublicGamePageProps = {
  game: RomHackGameEntry;
};

function GamePage({ game }: PublicGamePageProps) {
  const [chosenHacks, setChosenHacks] = useState<RomHack[]>([]);

  const logoImg = require(`../../logos/${game.mameName}.png`);

  return (
    <div className="w-full sm:py-16">
      <div className="mx-auto w-full lg:max-w-4xl bg-white px-8 pb-4 lg:shadow-2xl lg:rounded-2xl">
        <h1>{game.gameName}</h1>

        <div className="grid grid-cols-8 gap-8 auto-rows-min px-8 sm:px-0 mb-8">
          <div className="col-start-1 col-end-9 sm:col-start-1 sm:col-end-5 grid place-items-center">
            <div className="flex flex-col h-full mt-16 gap-y-4">
              <h1 className="font-bold text-3xl sm:text-4xl text-center">
                {game.gameName}
              </h1>
            </div>
          </div>
          <div className="col-start-1 col-end-9 sm:h-auto sm:col-start-5 sm:col-end-9 self-stretch flex flex-col gap-y-4 py-4 items-center">
            <Image
              width={logoImg.width}
              height={logoImg.height}
              src={logoImg.src}
              className="shadow-xl"
              alt={`${game.gameName} logo`}
              priority
            />
          </div>
        </div>

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
