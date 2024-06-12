import { AddOnMap, RomFileEntry } from "./types";

async function getFinalRom(
  unzippedSourceFiles: RomFileEntry[],
  addOns: AddOnMap
): Promise<RomFileEntry[]> {
  return unzippedSourceFiles;
}

export { getFinalRom };
