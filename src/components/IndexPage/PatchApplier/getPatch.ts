import { RomFileEntry } from "./types";
import { unzip } from "./unzip";

const PATCH_URL = "/kof94teIpsPatches.zip";

async function getPatch(): Promise<RomFileEntry[]> {
  const response = await fetch(PATCH_URL);
  const arrayBuffer = await response.arrayBuffer();
  const data = new Uint8Array(arrayBuffer);

  return unzip(data);
}

export { getPatch };
