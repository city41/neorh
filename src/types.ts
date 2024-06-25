export type OriginalFile = {
  fileName: string;
  size: number;
  sha: string;
};

export type RomHack = {
  name: string;
};

export type RomHackGameEntry = {
  gameName: string;
  mameName: string;
  originalFiles: OriginalFile[];
  hacks: RomHack[];
};

export type RomFileEntry = {
  fileName: string;
  data: Uint8Array;
  patched?: boolean;
};

export type Variant = "a94" | "a95";

export type AddOnMap = Record<"font" | "cs", boolean>;
