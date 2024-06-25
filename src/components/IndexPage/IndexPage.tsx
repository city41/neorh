import { RomHackGameEntry } from "@/types";

type IndexPageProps = {
  games: RomHackGameEntry[];
};

function IndexPage({ games }: IndexPageProps) {
  return (
    <div>
      <h1>neorh</h1>
      <ul>
        {games.map((g) => {
          return <li>{g.gameName}</li>;
        })}
      </ul>
    </div>
  );
}

export { IndexPage };
