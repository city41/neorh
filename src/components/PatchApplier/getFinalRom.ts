import { applyPatches } from "./applyPatches";
import { getPatch } from "./getPatch";
import { RomFileEntry, RomHack, RomHackGameEntry, Variant } from "../../types";

const PATCH_A94_URL = "/kof94teIpsPatches_a94.zip";
const PATCH_A95_URL = "/kof94teIpsPatches_a95.zip";

async function getFinalRom(
  unzippedSourceFiles: RomFileEntry[],
  game: RomHackGameEntry,
  hacks: RomHack[]
): Promise<RomFileEntry[]> {
  let patchedFiles = unzippedSourceFiles;

  for (const hack of hacks) {
    const patchFiles = await getPatch(game.mameName, hack.zip);
    patchedFiles = applyPatches(unzippedSourceFiles, patchFiles);
  }

  return patchedFiles;
}

export { getFinalRom };
