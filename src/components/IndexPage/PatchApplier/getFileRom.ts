import { applyAddOns } from "./applyAddOns";
import { applyPatches } from "./applyPatches";
import { getPatch } from "./getPatch";
import { AddOnMap, RomFileEntry } from "./types";

const PATCH_A94_URL = "/kof94teIpsPatches_a94.zip";
const PATCH_A95_URL = "/kof94teIpsPatches_a95.zip";

async function getFinalRom(
  unzippedSourceFiles: RomFileEntry[],
  addOns: AddOnMap
): Promise<RomFileEntry[]> {
  const patchUrl = addOns.a94 ? PATCH_A94_URL : PATCH_A95_URL;
  const patchFiles = await getPatch(patchUrl);

  const patchedBaseRomFiles = applyPatches(unzippedSourceFiles, patchFiles);

  const patchedRomFilesWithAddons = await applyAddOns(
    patchedBaseRomFiles,
    addOns
  );

  return patchedRomFilesWithAddons;
}

export { getFinalRom };
