import { applyPatches } from "./applyPatches";
import { getPatch } from "./getPatch";
import { RomFileEntry, Variant } from "../../types";

const PATCH_A94_URL = "/kof94teIpsPatches_a94.zip";
const PATCH_A95_URL = "/kof94teIpsPatches_a95.zip";

async function getFinalRom(
  unzippedSourceFiles: RomFileEntry[]
): Promise<RomFileEntry[]> {
  const patchUrl = PATCH_A95_URL;
  const patchFiles = await getPatch(patchUrl);

  const patchedBaseRomFiles = applyPatches(
    unzippedSourceFiles,
    patchFiles,
    "a95"
  );

  return patchedBaseRomFiles;
}

export { getFinalRom };
