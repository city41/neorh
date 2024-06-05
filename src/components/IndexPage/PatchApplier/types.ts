export type RomFileEntry = {
  fileName: string;
  data: Uint8Array;
  patched?: boolean;
};

export type AddOnMap = Record<"font" | "cs", boolean>;
