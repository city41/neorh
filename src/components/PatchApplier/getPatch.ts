import { RomFileEntry } from "../../types";
import { unzip } from "./unzip";

async function getPatch(
  mameSlug: string,
  zip: string
): Promise<RomFileEntry[]> {
  const patchUrl = `/ips/${mameSlug}/${zip}`;

  const response = await fetch(patchUrl);
  const arrayBuffer = await response.arrayBuffer();
  const data = new Uint8Array(arrayBuffer);

  return unzip(data);
}

export { getPatch };
