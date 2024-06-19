import { applyAddOns } from "./applyAddOns";
import { applyPatches } from "./applyPatches";
import { getPatch } from "./getPatch";
import { AddOnMap, RomFileEntry, Variant } from "./types";

const PATCH_A94_URL = "/kof94teIpsPatches_a94.zip";
const PATCH_A95_URL = "/kof94teIpsPatches_a95.zip";

async function getFinalRom(
  unzippedSourceFiles: RomFileEntry[],
  variant: Variant,
  addOns: AddOnMap
): Promise<RomFileEntry[]> {
  const patchUrl = variant === "a94" ? PATCH_A94_URL : PATCH_A95_URL;
  const patchFiles = await getPatch(patchUrl);

  const patchedBaseRomFiles = applyPatches(
    unzippedSourceFiles,
    patchFiles,
    variant
  );

  const patchedRomFilesWithAddons = await applyAddOns(
    patchedBaseRomFiles,
    addOns
  );

  return patchedRomFilesWithAddons;
}

export { getFinalRom };
