import { applyPatches } from "./applyPatches";
import { AddOnMap, RomFileEntry } from "./types";

type TargetRom = "055-c1.c1" | "055-p1.p1";
type AddOn = "font" | "cs";

const ipsUrlMap: Record<AddOn, string> = {
  font: "/kof94font.055-c1.c1.ips",
  cs: "/kof94cs.055-p1.p1.ips",
};

const targetRomMap: Record<AddOn, TargetRom> = {
  font: "055-c1.c1",
  cs: "055-p1.p1",
};
async function getIps(ipsUrl: string, addOn: AddOn): Promise<RomFileEntry> {
  const response = await fetch(ipsUrl);
  if (response.status >= 400) {
    throw Error(`Failed to download ${ipsUrl}: ${response.status}`);
  }
  const arrayBuffer = await response.arrayBuffer();
  const data = new Uint8Array(arrayBuffer);

  return {
    fileName: ipsUrl.replace("/", "").replace(addOn, ""),
    data,
  };
}

async function applyAddOn(
  inputRomFiles: RomFileEntry[],
  addOn: AddOn
): Promise<RomFileEntry[]> {
  const ipsUrl = ipsUrlMap[addOn];
  const targetRom = targetRomMap[addOn];

  const ipsPatch = await getIps(ipsUrl, addOn);

  const unpatchedROM = inputRomFiles.find((irf) =>
    irf.fileName.toLowerCase().includes(targetRom)
  )!;

  const [patchedROM] = applyPatches([unpatchedROM], [ipsPatch]);

  return inputRomFiles.map((irf) => {
    if (irf.fileName.toLowerCase().includes(targetRom)) {
      return patchedROM;
    } else {
      return irf;
    }
  });
}

async function applyAddOns(
  inputRomFiles: RomFileEntry[],
  addOns: AddOnMap
): Promise<RomFileEntry[]> {
  const addOnEntries = Object.entries(addOns);

  let patchedRomFiles = inputRomFiles;

  for (const addOnEntry of addOnEntries) {
    if (addOnEntry[1]) {
      console.log("applying addon", addOnEntry[0]);
      patchedRomFiles = await applyAddOn(
        patchedRomFiles,
        addOnEntry[0] as AddOn
      );
    }
  }

  return patchedRomFiles;
}

export { applyAddOns };
