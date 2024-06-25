import { RomHackGameEntry } from "@/types";
import { GameEntry } from "./GameEntry";

type IndexPageProps = {
  games: RomHackGameEntry[];
};

function IndexPage({ games }: IndexPageProps) {
  return (
    <div className="w-full sm:py-16">
      <div className="mx-auto w-full lg:max-w-4xl bg-white px-8 pb-4 lg:shadow-2xl lg:rounded-2xl">
        <h1>Neo Geo rom hacks</h1>
        <ul>
          {games.map((g) => {
            return (
              <li>
                <GameEntry game={g} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export { IndexPage };
