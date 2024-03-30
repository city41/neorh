import { Uint8ArrayReader, ZipReader } from "@zip.js/zip.js";
import { RomFileEntry } from "./types";

async function unzip(zippedData: Uint8Array): Promise<RomFileEntry[]> {
  const uint8Reader = new Uint8ArrayReader(zippedData);
  const zipReader = new ZipReader(uint8Reader);
  const entries = await zipReader.getEntries();

  const unzippedEntries: RomFileEntry[] = [];

  for (const entry of entries) {
    const entryStream = new TransformStream();
    const responsePromise = new Response(entryStream.readable).arrayBuffer();

    await entry.getData!(entryStream.writable);
    const data = await responsePromise;

    unzippedEntries.push({
      fileName: entry.filename,
      data: new Uint8Array(data),
    });
  }

  await zipReader.close();

  return unzippedEntries;
}

export { unzip };
