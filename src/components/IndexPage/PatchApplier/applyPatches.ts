import { RomFileEntry, Variant } from "./types";

function patchHasValidMagicNumber(p: number[]): boolean {
  const magicNumber = "PATCH".split("").map((c) => c.charCodeAt(0));

  return magicNumber.every((v, i) => {
    return p[i] === v;
  });
}

function patchHasValidEOF(p: number[]): boolean {
  const eof = "EOF".split("").map((c) => c.charCodeAt(0));

  return eof.every((v, i) => {
    return p[p.length - 3 + i] === v;
  });
}

function getOffset(p: number[], i: number): number {
  const highByte = p[i];
  const midByte = p[i + 1];
  const lowByte = p[i + 2];

  return (highByte << 16) | (midByte << 8) | lowByte;
}

function getRunLength(p: number[], i: number): number {
  const highByte = p[i];
  const lowByte = p[i + 1];

  return (highByte << 8) | lowByte;
}

function applyPatch(
  inputFile: RomFileEntry,
  patch: RomFileEntry
): RomFileEntry {
  console.log("about to patch", inputFile.fileName);
  const patchData = Array.from(patch.data);

  // this creates a copy of the underlying data
  const patchedFileData = Array.from(inputFile.data);

  if (!patchHasValidMagicNumber(patchData)) {
    throw new Error(`Patch file lacks PATCH magic number: ${patch.fileName}`);
  }

  if (!patchHasValidEOF(patchData)) {
    throw new Error(`Patch file lacks EOF marker: ${patch.fileName}`);
  }

  const initialLength = inputFile.data.length;

  // skip "PATCH", conclude before "EOF"
  for (let pi = 5; pi < patch.data.length - 3; ) {
    const offset = getOffset(patchData, pi);
    const runLength = getRunLength(patchData, pi + 3);
    const runData = patchData.slice(pi + 5, pi + 5 + runLength);

    patchedFileData.splice(offset, runLength, ...runData);
    pi += 5 + runLength;
  }

  if (initialLength !== patchedFileData.length) {
    throw new Error(
      `applyPatch: length of file changed, from ${initialLength} to ${patchedFileData.length}`
    );
  }

  return {
    ...inputFile,
    data: new Uint8Array(patchedFileData),
    patched: true,
  };
}

function applyPatches(
  inputFiles: RomFileEntry[],
  patches: RomFileEntry[],
  variant?: Variant
): RomFileEntry[] {
  return inputFiles.map((inputFile) => {
    const patchName = `kof94${variant ? `_${variant}` : ""}.${
      inputFile.fileName
    }.ips`;

    const patch = patches.find((p) => p.fileName === patchName);

    if (patch) {
      console.log("applying patch", patch.fileName);
      return applyPatch(inputFile, patch);
    } else {
      console.log("no patch found for", inputFile.fileName);
      return inputFile;
    }
  });
}

export { applyPatches };
