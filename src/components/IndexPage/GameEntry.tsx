import clsx from "clsx";
import { RomHackGameEntry } from "../../types";

type GameEntryProps = {
  className?: string;
  game: RomHackGameEntry;
};

function GameEntry({ className, game }: GameEntryProps) {
  return (
    <div className={clsx(className)}>
      <h2 className="px-4 py-8 bg-blue-900 text-white font-bold text-2xl">
        {game.gameName}
      </h2>
    </div>
  );
}

export { GameEntry };
