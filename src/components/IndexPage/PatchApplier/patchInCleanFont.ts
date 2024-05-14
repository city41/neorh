import { applyPatches } from "./applyPatches";
import { RomFileEntry } from "./types";

const CLEAN_FONT_PATCH_URL = "/kof94.055-c1.c1.ips";

async function getCleanFontPatch(): Promise<RomFileEntry> {
  const response = await fetch(CLEAN_FONT_PATCH_URL);
  const arrayBuffer = await response.arrayBuffer();
  const data = new Uint8Array(arrayBuffer);

  return {
    fileName: CLEAN_FONT_PATCH_URL.replace("/", ""),
    data,
  };
}

async function patchInCleanFont(
  inputRomFiles: RomFileEntry[]
): Promise<RomFileEntry[]> {
  const cleanFontPatch = await getCleanFontPatch();

  const unpatchedC1 = inputRomFiles.find((irf) =>
    irf.fileName.toLowerCase().includes("c1")
  )!;

  const [patchedC1] = applyPatches([unpatchedC1], [cleanFontPatch]);

  return inputRomFiles.map((irf) => {
    if (irf.fileName.toLowerCase().includes("c1")) {
      return patchedC1;
    } else {
      return irf;
    }
  });
}

export { patchInCleanFont };
