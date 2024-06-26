import { RomFileEntry } from "../../types";
import { unzip } from "./unzip";

async function getPatch(
  mameSlug: string,
  zip: string
): Promise<RomFileEntry[]> {
  const patchUrl = `/ips/${mameSlug}/${zip}`;

  const response = await fetch(patchUrl);

  if (response.status >= 400) {
    throw new Error(
      `Failed to download patch (${patchUrl}): ${response.status} - ${response.statusText}`
    );
  }

  const arrayBuffer = await response.arrayBuffer();
  const data = new Uint8Array(arrayBuffer);

  console.log("data", data);

  return unzip(data);
}

export { getPatch };
