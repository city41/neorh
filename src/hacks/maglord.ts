import { RomHackGameEntry } from "@/types";
import { Genre } from "neosdconv/lib/genres";

const maglord: RomHackGameEntry = {
  gameName: "Magician Lord",
  mameName: "maglord",
  mergedMameName: "maglordh",
  developer: "ADK",
  year: 1990,
  neosdConvertOptions: {
    genre: Genre.Action,
    ngh: "005",
  },
  originalFiles: [
    {
      fileName: "005-c1.c1",
      size: 524288,
      sha: "98a7b51b6ad5e2556e57c5de27fe17f18e175fc59a9497743b8c8aeba969ee35",
    },
    {
      fileName: "005-c2.c2",
      size: 524288,
      sha: "e2249dddc5d90dcf4a1c526ff8723748d5119f7c8970e417eb7113260aff1acf",
    },
    {
      fileName: "005-c3.c3",
      size: 524288,
      sha: "d31de38ea72198fd6c8c16b41394281fa2fea8efa8a732a25438495cd8220f90",
    },
    {
      fileName: "005-c4.c4",
      size: 524288,
      sha: "b1a3ca5b61802e57897432c4bce10ff8e77863124b5c91d982d9d2da1823fe5a",
    },
    {
      fileName: "005-c5.c5",
      size: 524288,
      sha: "3a2b1c907c543b5bc70e6a069fcb5c1505c547b0962673c2d43409cddd2fbfb0",
    },
    {
      fileName: "005-c6.c6",
      size: 524288,
      sha: "5423f16077c806c91ff7555ae849e06c126c22b164344082f1d9ccd2a3040bea",
    },
    {
      fileName: "005-m1.m1",
      size: 524288,
      sha: "99b4ccd4d84f105905ed69d005c1bdebc2eba4cded2cc2daff43c0bdb97c8f0e",
    },
    {
      fileName: "005-p1.p1",
      size: 524288,
      sha: "a315c99a9bca39fd0b37e2313717013697d2534b6f7f524cf398cc27e4278915",
      fallBackZip: "maglordh",
    },
    {
      fileName: "005-s1.s1",
      size: 131072,
      sha: "a7124fdb61bc9603884507cc1e92cf58de35f67c7226ff46125f511ab3393f5f",
    },
    {
      fileName: "005-v11.v11",
      size: 524288,
      sha: "e2288fc82288711258d87aa605a2efb1ca6563d324d7f59bb7f4b312a3fb5938",
    },
    {
      fileName: "005-v21.v21",
      size: 524288,
      sha: "27600fe09f1bf12dc0e9c55eb650f2aaa514739a02d7b0373f6a76d277ae4f51",
    },
    {
      fileName: "005-v22.22",
      size: 524288,
      sha: "b0296bf7d8f62473c380a751d86ac690c3e4c53a9b881b97b5cfe2252255d959",
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
      mameDownloadName: "maglordh",
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
      mameDownloadName: "maglordh",
    },
  ],
};

export { maglord };
