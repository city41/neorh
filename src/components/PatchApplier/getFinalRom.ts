import { applyPatches } from "./applyPatches";
import { getPatch } from "./getPatch";
import { RomFileEntry, RomHack, RomHackGameEntry } from "../../types";
import { calculateHash } from "./calculateHash";

function findMatchingFileViaSha(files: RomFileEntry, sha: string) {}

/**
 * Combines the source files into one file bundle, to then be
 * treated logically as one going forward. This is only necessary
 * for hacks that involve more than one input rom, ie maglord_acfh
 */
async function combineSourceFiles(
  unzippedSourceFiles: RomFileEntry[][],
  game: RomHackGameEntry
): Promise<RomFileEntry[]> {
  if (unzippedSourceFiles.length === 1) {
    return unzippedSourceFiles[0];
  }

  const flattenedFiles = unzippedSourceFiles.flat(1);

  const combinedSourceFiles: RomFileEntry[] = [];

  for (const originalFile of game.originalFiles) {
    for (const flattenedFile of flattenedFiles) {
      const flattenedSha = await calculateHash(flattenedFile.data);

      if (originalFile.sha === flattenedSha) {
        combinedSourceFiles.push(flattenedFile);
      }
    }
  }

  if (combinedSourceFiles.length !== game.originalFiles.length) {
    throw new Error(
      `combineSourceFiles: unexpected file count mismatch. Expected ${game.originalFiles.length}, got ${combinedSourceFiles.length}`
    );
  }

  return combinedSourceFiles;
}

async function getFinalRom(
  unzippedSourceFiles: RomFileEntry[][],
  game: RomHackGameEntry,
  hacks: RomHack[]
): Promise<RomFileEntry[]> {
  let patchedFiles = await combineSourceFiles(unzippedSourceFiles, game);

  for (const hack of hacks) {
    console.log("about to apply", hack.name);
    const patchFiles = await getPatch(game.mameName, hack.zip);
    patchedFiles = applyPatches(patchedFiles, patchFiles);
  }

  return patchedFiles;
}

export { getFinalRom };
