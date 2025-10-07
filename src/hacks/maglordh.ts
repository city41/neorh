import { RomHackGameEntry } from "@/types";
import { Genre } from "neosdconv/lib/genres";

const maglordh: RomHackGameEntry = {
  gameName: "Magician Lord",
  mameName: "maglordh",
  zips: ["maglord", "maglordh"],
  developer: "ADK",
  year: 1990,
  neosdConvertOptions: {
    genre: Genre.Action,
    ngh: "005",
  },
  originalFiles: [
    {
      fileName: "005-p1.p1",
      size: 524288,
      sha: "a315c99a9bca39fd0b37e2313717013697d2534b6f7f524cf398cc27e4278915",
      zipName: "maglordh.zip",
    },
    {
      fileName: "005-s1.s1",
      size: 131072,
      sha: "a7124fdb61bc9603884507cc1e92cf58de35f67c7226ff46125f511ab3393f5f",
      zipName: "maglord.zip",
    },
  ],
  hacks: [
    {
      id: "acfh-ee",
      creators: ["Boomchild"],
      name: "Again Changes From Hell (english-engrish)",
      zip: "maglord_acfh-english-engrish-1.0.0.zip",
      repo: "https://github.com/Boomchil/maglord-acfh",
      incompatibleWith: ["acfh-fa"],
      details: ["TODO, a proper description"],
      screenshots: [
        {
          fileName: "ss1.png",
          description: "The first level",
        },
      ],
      downloadAs: ["mame"],
    },
    {
      id: "acfh-fa",
      creators: ["Boomchild"],
      name: "Again Changes From Hell (francais-anglais)",
      zip: "maglord_acfh-francais-anglais-1.0.0.zip",
      repo: "https://github.com/Boomchil/maglord-acfh",
      incompatibleWith: ["acfh-ee"],
      details: ["TODO, a proper description"],
      screenshots: [
        {
          fileName: "ss1.png",
          description: "The first level",
        },
      ],
      downloadAs: ["mame"],
    },
  ],
};

export { maglordh };
