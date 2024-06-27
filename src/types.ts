export type FileInfo = {
  fileName: string;
  // TODO: wow this is such a hack...
  // this is because neosdconv doesn't know how to deal
  // with pbobblen's rom names
  neosdconvFileName?: string;
  size: number;
  sha: string;
};

export type Screenshot = {
  fileName: string;
  description: string;
};

export type DownloadType = "neosd" | "mame" | "fbneo";

export type RomHack = {
  id: string;
  name: string;
  creators: string[];
  incompatibleWith: string[];
  zip: string;
  repo?: string;
  details: string[];
  screenshots: Screenshot[];
  youtube?: string;
  website?: string;
  downloadAs: DownloadType[];
};

export type RomHackGameEntry = {
  gameName: string;
  mameName: string;
  originalFiles: FileInfo[];
  developer: string;
  year: number;
  hacks: RomHack[];
  neosdConvertOptions: {
    genre: number;
    ngh: string;
  };
};

export type RomFileEntry = {
  fileName: string;
  data: Uint8Array;
  patched?: boolean;
};
