import { RomHackGameEntry } from "@/types";

const lastblad: RomHackGameEntry = {
  gameName: "The Last Blade",
  mameName: "lastblad",
  developer: "SNK",
  year: 1997,
  originalFiles: [
    {
      fileName: "234-c1.c1",
      size: 8388608,
      sha: "d01426ed8604aebc0250922d82b2310c45c1044cca5bb11387bc36ef22e24278",
    },
    {
      fileName: "234-c2.c2",
      size: 8388608,
      sha: "7cd8cb75f33af4b59b498e4d191a27114f9ce7bc4efda1e54eb1f7ec140c2eb8",
    },
    {
      fileName: "234-c3.c3",
      size: 8388608,
      sha: "36a054445c3bb9e5d45e60a2f6554852d39fd1234d70a546740fa9e97c7eb16e",
    },
    {
      fileName: "234-c4.c4",
      size: 8388608,
      sha: "3eead32fa1d444866a97275bc9e6140f1f51c2efc91f2b1e65b5162baf1b0189",
    },
    {
      fileName: "234-c5.c5",
      size: 4194304,
      sha: "8af0fbc04c5ddf15fb36f8d1b41d03e3086f315f44bd62745e957ab39a1a7503",
    },
    {
      fileName: "234-c6.c6",
      size: 4194304,
      sha: "8c40482de21ab92359c3b818354b9f6ed1b1cb5388e4e7638bdc90d68e139022",
    },
    {
      fileName: "234-m1.m1",
      size: 131072,
      sha: "6d8e5b05197e79ffacc6d4baab8a67f6540f8669d4e465f8c12b73d7b8a98d2b",
    },
    {
      fileName: "234-p1.p1",
      size: 1048576,
      sha: "e3e8f2fcbf2941260aeb71847f47797f7bce479a8423348a76c9ae623ea680f9",
    },
    {
      fileName: "234-p2.sp2",
      size: 4194304,
      sha: "26770918dbf563ec1b4cd0830e13b50784ca8c94f43d66070a5c3a9a6ccb5718",
    },
    {
      fileName: "234-s1.s1",
      size: 131072,
      sha: "5e943dfe1f92578dae8a61240ce3d64eee241d1b44b6e2fcd295e962a8dc01dc",
    },
    {
      fileName: "234-v1.v1",
      size: 4194304,
      sha: "433b26eca445ef2fdab1fd069f1e8589037a4f2649425146323c21ed5ae315c4",
    },
    {
      fileName: "234-v2.v2",
      size: 4194304,
      sha: "f842097af0ac01a4160beee5230825eb5ca2da88b07c75de22da89ba2b39f520",
    },
    {
      fileName: "234-v3.v3",
      size: 4194304,
      sha: "b8e71df3da5b107e22539c03b8f7b9979aa28284ce0a6ee80f105462fee1c60f",
    },
    {
      fileName: "234-v4.v4",
      size: 4194304,
      sha: "bddc6e2430def2d474e0de68210ff33e57ac2ab282ead42d1899a21b77016d67",
    },
  ],
  hacks: [
    {
      id: "minigame",
      creators: ["Matt Greer"],
      name: "Hidden mini game",
      zip: "lastbladminigameIpsPatches.zip",
      repo: "https://github.com/city41/lbmini",
      incompatibleWith: [],
      details: [
        "The developers of the game hid a mini game deep inside of it. It's normally tricky to get to.",
        "This hack has the mini game play instead of the attract mode.",
        "In both AES/Home and MVS/arcade mode, the mini game will start right after the Neo Geo eyecatcher has finished (don't try to skip it).",
      ],
      screenshots: [
        {
          fileName: "level1.png",
          description: "The first level",
        },
        {
          fileName: "level2.png",
          description: "and the second level",
        },
      ],
      youtube: "https://www.youtube.com/watch?v=AdHPz36y-SU",
    },
  ],
};

export { lastblad };
