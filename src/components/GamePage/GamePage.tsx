import { RomHackGameEntry } from "@/types";
import { PatchApplier } from "../PatchApplier";

type PublicGamePageProps = {
  game: RomHackGameEntry;
};

function GamePage({ game }: PublicGamePageProps) {
  return (
    <div className="w-full sm:py-16">
      <div className="mx-auto w-full lg:max-w-4xl bg-white px-8 pb-4 lg:shadow-2xl lg:rounded-2xl">
        <h1>{game.gameName}</h1>
        <p>Choose your hacks</p>
        <ul>
          {game.hacks.map((h) => {
            return (
              <li key={h.id}>
                <label>
                  <input type="checkbox" />
                  {h.name}
                </label>
              </li>
            );
          })}
        </ul>
        <PatchApplier />
      </div>
    </div>
  );
}

export { GamePage };
export type { PublicGamePageProps };
