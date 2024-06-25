import { RomHackGameEntry } from "@/types";

type PublicGamePageProps = {
  game: RomHackGameEntry;
};

function GamePage({ game }: PublicGamePageProps) {
  return <div>{game.gameName} page goes here</div>;
}

export { GamePage };
export type { PublicGamePageProps };
