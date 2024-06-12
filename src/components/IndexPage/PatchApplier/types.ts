export type RomFileEntry = {
  fileName: string;
  data: Uint8Array;
  patched?: boolean;
};

export type Variant = "a94" | "a95";

export type AddOnMap = Record<"font" | "cs", boolean>;
