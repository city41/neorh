import { RomFileEntry } from "./types";

function parseFileName(fileName: string) {
  const split = fileName.split(".");

  if (split.length !== 2) {
    throw new Error(`parseFileName: unexpected file name: ${fileName}`);
  }

  return {
    baseName: split[0],
    extension: split[1],
  };
}

// from 055-p1.p1 to 055-p1{tag}.p1
function tagFilename(fileName: string, tag: string): string {
  const { baseName, extension } = parseFileName(fileName);

  return `${baseName}${tag}.${extension}`;
}

function tagPatchedFiles(files: RomFileEntry[], tag: string): RomFileEntry[] {
  return files.map((f) => {
    if (f.patched) {
      return {
        ...f,
        fileName: tagFilename(f.fileName, tag),
      };
    } else {
      return f;
    }
  });
}

export { tagPatchedFiles };
