import { Genre } from "neosdconv/lib/genres";
import { RomHackGameEntry } from "..//types";

const kof94: RomHackGameEntry = {
  gameName: "The King of Fighters '94",
  mameName: "kof94",
  developer: "SNK",
  year: 1994,
  neosdConvertOptions: {
    genre: Genre.Fighting,
    ngh: "55",
  },
  originalFiles: [
    {
      fileName: "055-c1.c1",
      size: 2097152,
      sha: "0eb79bde791b0a67c4ef26d8b5670ca4290e1697efd3afba6c1bfdda0e5ce831",
    },
    {
      fileName: "055-c2.c2",
      size: 2097152,
      sha: "5374cb7a09efd8a947f00ef1246004d5c71c05c81ee0714971a6e515fd3d8a42",
    },
    {
      fileName: "055-c3.c3",
      size: 2097152,
      sha: "9957988c4561df09ffa2defe74712a7efbc05a2d04183227b6f525dfad5727ca",
    },
    {
      fileName: "055-c4.c4",
      size: 2097152,
      sha: "3406e3930143b1797fb5d77f9898880ec356ed59cacae8193c91c4eb6ce2e9cd",
    },
    {
      fileName: "055-c5.c5",
      size: 2097152,
      sha: "a169151abe80990c88599c69619d08e5da35cd49a529a3c31a0fdaf41dd6c7c6",
    },
    {
      fileName: "055-c6.c6",
      size: 2097152,
      sha: "95b031ce2401e8f8fa60e57892aa538fef2c47cef591dc1eb44809c895355971",
    },
    {
      fileName: "055-c7.c7",
      size: 2097152,
      sha: "0e4c0932e0e1c8f0fc59aefecc640bb529ac71e37831a3f88ee5181384755462",
    },
    {
      fileName: "055-c8.c8",
      size: 2097152,
      sha: "f7e0be356109487103ee6667754df61ae8ff1dd1bbc8349e713afdd4a34d5d8d",
    },
    {
      fileName: "055-m1.m1",
      size: 131072,
      sha: "94d09fcca346b43b374c33cffcfdcd777491ddce7f476dab12700ae3d0fc6e01",
    },
    {
      fileName: "055-p1.p1",
      size: 2097152,
      sha: "09f433f15e88cb8570f5a6efb4d4faeb644ebf74ccfa50c0ffc6fb533f851523",
    },
    {
      fileName: "055-s1.s1",
      size: 131072,
      sha: "43527cf76e34b8494e4605004e4504b02a617d6a4d710c51bf36e753bf745e51",
    },
    {
      fileName: "055-v1.v1",
      size: 2097152,
      sha: "301e74be99018401730987a2c084a62f141a6bedf082bd07ac18e3cafc9c6c83",
    },
    {
      fileName: "055-v2.v2",
      size: 2097152,
      sha: "c279153a111dccd1f04b977b35e99f422126c43b885555e59c1cb16e70cd8925",
    },
    {
      fileName: "055-v3.v3",
      size: 2097152,
      sha: "5c193b9d0279db11a4bd898c1e1266cef76902d0c4ddee28e4db9d1f6958f473",
    },
  ],
  hacks: [
    {
      id: "te95",
      name: "Team Edit Edition: KOF95 style portraits",
      incompatibleWith: ["kof94te_a94"],
      repo: "https://github.com/city41/kof94te",
      zip: "kof94teIpsPatches_a95.zip",
      creators: ["Matt Greer"],
      details: [
        "Adds custom teams to the game. This is a thorough hack, showing your custom team throughout all aspects of the game.",
        "This version uses character portraits from KOF95 and KOF98.",
        "This is a big hack, for more details, check the hack's website.",
      ],
      screenshots: [
        {
          fileName: "charSelect_a95.png",
          description:
            "A full on character select screen, modeled after KOF95.",
        },
        {
          fileName: "cpuCustomTeams_a95.png",
          description: "The CPU can choose custom teams too.",
        },
        {
          fileName: "gameplay.png",
          description: "Fighting with custom teams.",
        },
        {
          fileName: "winScreen.png",
          description: "The win screen with custom teams.",
        },
        {
          fileName: "continueScreen.png",
          description: "The continue screen with custom teams.",
        },
        {
          fileName: "cutscene2.png",
          description: "Custom teams during cutscenes",
        },
        {
          fileName: "usaEnding.png",
          description: "Surprising new endings.",
        },
      ],
      website: "https://kof94te.mattgreer.dev",
      youtube: "https://www.youtube.com/watch?v=LBum6iwyDpk",
      downloadAs: ["fbneo", "mame", "neosd"],
    },
    {
      id: "te94",
      name: "Team Edit Edition: KOF94 style portraits",
      incompatibleWith: ["kof94te_a95"],
      repo: "https://github.com/city41/kof94te",
      zip: "kof94teIpsPatches_a94.zip",
      creators: ["Matt Greer", "Bunny-Head"],
      details: [
        "Adds custom teams to the game. This is a thorough hack, showing your custom team throughout all aspects of the game.",
        "This version uses KOF94 style character portraits based on the health bar portraits. They were created by Bunny-Head.",
        "This is a big hack, for more details, check the hack's website.",
      ],
      screenshots: [
        {
          fileName: "charSelect_a94.png",
          description:
            "A full on character select screen, modeled after KOF95.",
        },
        {
          fileName: "cpuCustomTeams_a94.png",
          description: "The CPU can choose custom teams too.",
        },
        {
          fileName: "gameplay.png",
          description: "Fighting with custom teams.",
        },
        {
          fileName: "winScreen.png",
          description: "The win screen with custom teams.",
        },
        {
          fileName: "continueScreen.png",
          description: "The continue screen with custom teams.",
        },
        {
          fileName: "cutscene2.png",
          description: "Custom teams during cutscenes",
        },
        {
          fileName: "usaEnding.png",
          description: "Surprising new endings.",
        },
      ],
      website: "https://kof94te.mattgreer.dev",
      youtube: "https://www.youtube.com/watch?v=LBum6iwyDpk",
      downloadAs: ["fbneo", "mame", "neosd"],
    },
    {
      id: "cheatsheet",
      name: "Cheat Sheet",
      incompatibleWith: [],
      repo: "https://github.com/city41/kof9cs",
      zip: "kof94csIpsPatches.zip",
      creators: ["Matt Greer"],
      details: [
        "When playing in AES/home mode, pause the game to see your current character's move list",
        "When playing in versus mode, whoever paused the game is who gets to see their move list.",
      ],
      screenshots: [
        {
          fileName: "cheatsheet.png",
          description:
            "Your current player's moves shown when you pause the game.",
        },
      ],
      downloadAs: ["mame", "neosd"],
    },
    {
      id: "font",
      name: "Clean Font",
      incompatibleWith: [],
      repo: "https://github.com/city41/kof9font",
      zip: "kof94fontIpsPatches.zip",
      creators: ["Matt Greer"],
      details: [
        "For Spanish and English, cleans up the main font a little bit by adding a 1 pixel gap.",
      ],
      screenshots: [
        {
          fileName: "cleanFont.png",
          description:
            "The font without the hack (above) and with the hack (below)",
        },
      ],
      downloadAs: ["mame", "neosd"],
    },
  ],
};

export { kof94 };
