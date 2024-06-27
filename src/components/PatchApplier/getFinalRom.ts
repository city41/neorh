import { applyPatches } from "./applyPatches";
import { getPatch } from "./getPatch";
import { RomFileEntry, RomHack, RomHackGameEntry } from "../../types";

async function getFinalRom(
  unzippedSourceFiles: RomFileEntry[],
  game: RomHackGameEntry,
  hacks: RomHack[]
): Promise<RomFileEntry[]> {
  let patchedFiles = unzippedSourceFiles;

  for (const hack of hacks) {
    console.log("about to apply", hack.name);
    const patchFiles = await getPatch(game.mameName, hack.zip);
    patchedFiles = applyPatches(patchedFiles, patchFiles);
  }

  return patchedFiles;
}

export { getFinalRom };
