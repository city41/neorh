import { RomHackGameEntry } from "@/types";
import { GameEntry } from "./GameEntry";
import Link from "next/link";

type IndexPageProps = {
  games: RomHackGameEntry[];
};

function IndexPage({ games }: IndexPageProps) {
  return (
    <>
      <ul>
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
    </>
  );
}

export { IndexPage };
