import { Uint8ArrayReader, Uint8ArrayWriter, ZipWriter } from "@zip.js/zip.js";
import { RomFileEntry } from "./types";

async function zip(files: RomFileEntry[]): Promise<Uint8Array> {
  console.log("zip, provided files", files.map((f) => f.fileName).join(","));

  const zipFileWriter = new Uint8ArrayWriter();
  const zipWriter = new ZipWriter(zipFileWriter);

  for (const file of files) {
    console.log("about to add to the zip", file.fileName);
    try {
      await zipWriter.add(file.fileName, new Uint8ArrayReader(file.data));
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      const stack = e instanceof Error ? e.stack : "";
      console.error("failed to add a file", message, stack);
      throw new Error(
        `Failed to add ${file.fileName} to the zip: ${message} ${stack}`
      );
    }
  }

  await zipWriter.close();

  return zipFileWriter.getData();
}

export { zip };
