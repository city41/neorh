import { calculateHash } from "./calculateHash";
import { FileInfo, RomFileEntry } from "../../types";

async function validateFiles(
  files: RomFileEntry[],
  expectedFiles: FileInfo[],
  zipFileName?: string
) {
  const actualExpectedFiles = zipFileName
    ? expectedFiles.filter((ef) => ef.zipName === `${zipFileName}.zip`)
    : expectedFiles;

  for (const expectedFile of actualExpectedFiles) {
    let foundFile = null;
    for (const candidateFile of files) {
      const candidateSha = await calculateHash(candidateFile.data);

      if (candidateSha === expectedFile.sha) {
        foundFile = candidateFile;
        break;
      }
    }

    if (!foundFile) {
      throw new Error(
        `File not found: ${expectedFile.fileName} (expected sha: ${expectedFile.sha})`
      );
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
