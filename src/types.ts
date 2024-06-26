export type OriginalFile = {
  fileName: string;
  size: number;
  sha: string;
};

export type RomHack = {
  id: string;
  name: string;
  creators: string[];
  incompatibleWith: string[];
  zip: string;
  repo?: string;
  fbNeo?: boolean;
  details: string[];
  screenshots: string[];
  youtube?: string;
};

export type RomHackGameEntry = {
  gameName: string;
  mameName: string;
  originalFiles: OriginalFile[];
  developer: string;
  year: number;
  hacks: RomHack[];
};

export type RomFileEntry = {
  fileName: string;
  data: Uint8Array;
  patched?: boolean;
};
