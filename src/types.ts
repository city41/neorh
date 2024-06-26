export type FileInfo = {
  fileName: string;
  size: number;
  sha: string;
};

export type Screenshot = {
  fileName: string;
  description: string;
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
  screenshots: Screenshot[];
  youtube?: string;
};

export type RomHackGameEntry = {
  gameName: string;
  mameName: string;
  originalFiles: FileInfo[];
  developer: string;
  year: number;
  hacks: RomHack[];
};

export type RomFileEntry = {
  fileName: string;
  data: Uint8Array;
  patched?: boolean;
};
