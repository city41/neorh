import { calculateHash } from "./calculateHash";
import { FileInfo, RomFileEntry } from "../../types";

async function validateFiles(files: RomFileEntry[], expectedFiles: FileInfo[]) {
  for (const expectedFile of expectedFiles) {
    let foundFile = null;
    for (const candidateFile of files) {
      const candidateSha = await calculateHash(candidateFile.data);

      if (candidateSha === expectedFile.sha) {
        foundFile = candidateFile;
        break;
      }
    }

    if (!foundFile) {
      throw new Error(`File not found: ${expectedFile.fileName}`);
    }

    if (foundFile.fileName !== expectedFile.fileName) {
      console.log(
        "File in the provided zip has matching sha but different name. Name in zip",
        foundFile.fileName,
        "expected name",
        expectedFile.fileName
      );
      foundFile.fileName = expectedFile.fileName;
    }
  }
}

export { validateFiles };
