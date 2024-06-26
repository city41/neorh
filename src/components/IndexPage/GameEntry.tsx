import Image from "next/image";
import clsx from "clsx";
import { RomHackGameEntry } from "../../types";

type GameEntryProps = {
  className?: string;
  game: RomHackGameEntry;
};

function GameEntry({ className, game }: GameEntryProps) {
  const logoImg = require(`../../logos/${game.mameName}.png`).default;

  return (
    <div className="flex flex-col place-content-between bg-black rounded-tl-2xl rounded-br-2xl overflow-hidden h-60">
      <Image
        width={logoImg.width}
        height={logoImg.height}
        src={logoImg.src}
        alt={`${game.gameName} logo`}
        priority
      />
      <div className="flex flex-col px-3 py-2 bg-gray-700 text-white text-center border-t border-white">
        <h2 className="font-bold text-2xl">{game.gameName}</h2>
        <div className="text-base">
          {game.hacks.length} hack{game.hacks.length === 1 ? "" : "s"}
        </div>
      </div>
    </div>
  );
}

export { GameEntry };
