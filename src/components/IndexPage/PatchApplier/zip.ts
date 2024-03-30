import { Uint8ArrayReader, Uint8ArrayWriter, ZipWriter } from "@zip.js/zip.js";
import { RomFileEntry } from "./types";

async function zip(files: RomFileEntry[]): Promise<Uint8Array> {
  const zipFileWriter = new Uint8ArrayWriter();
  const zipWriter = new ZipWriter(zipFileWriter);

  for (const file of files) {
    await zipWriter.add(file.fileName, new Uint8ArrayReader(file.data));
  }

  await zipWriter.close();

  return zipFileWriter.getData();
}

export { zip };
