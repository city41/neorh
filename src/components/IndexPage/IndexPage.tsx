import { RomHackGameEntry } from "@/types";
import { GameEntry } from "./GameEntry";
import Link from "next/link";

type IndexPageProps = {
  games: RomHackGameEntry[];
};

function IndexPage({ games }: IndexPageProps) {
  return (
    <div className="mt-8 mb-16">
      <div className="mb-2 text-gray-400 text-sm">choose a game</div>
      <ul
        className="grid items-start gap-x-4 gap-y-4"
        style={{
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr)",
        }}
      >
        {games.map((g) => {
          return (
            <li key={g.mameName}>
              <Link href={g.mameName}>
                <GameEntry game={g} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { IndexPage };
