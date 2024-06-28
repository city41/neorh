import { RomHackGameEntry } from "@/types";
import { Genre } from "neosdconv/lib/genres";

const samsho4: RomHackGameEntry = {
  gameName: "Samurai Shodown 4",
  mameName: "samsho4",
  developer: "SNK",
  year: 1996,
  neosdConvertOptions: {
    genre: Genre.Fighting,
    ngh: "222",
  },
  originalFiles: [
    {
      fileName: "222-c1.c1",
      size: 4194304,
      sha: "0cf455bebbfd0e441aa876a4daa9cf10b85dd7a63c8682a3ae9f9ef602d16996",
    },
    {
      fileName: "222-c2.c2",
      size: 4194304,
      sha: "767281e752f71b8ae37f102ca2da1aa00fd5864cd17643a3ee398e63aefa20fe",
    },
    {
      fileName: "222-c3.c3",
      size: 4194304,
      sha: "28bade7821b482d5d65edb453c1c4fa6a2aaa4782ac9d7fb246c37f56c51e07d",
    },
    {
      fileName: "222-c4.c4",
      size: 4194304,
      sha: "b5e65fdb40b5944bf23f54d210ab8cae45c2205bab372d241b0cf2aa4e2692af",
    },
    {
      fileName: "222-c5.c5",
      size: 4194304,
      sha: "ac207b75d4cf092d4861eaa2452cc41ca293efe43f1ab67ff25bd6214a7204dd",
    },
    {
      fileName: "222-c6.c6",
      size: 4194304,
      sha: "93e0ebd446af577eae2eb1c96d1b1f9507089617c5d7ba24fe8b35e7acf20662",
    },
    {
      fileName: "222-c7.c7",
      size: 4194304,
      sha: "dbe6cb71bb4f5c5c544a5300cde2b0a9a836e6c876604c6d4073de962460bf4c",
    },
    {
      fileName: "222-c8.c8",
      size: 4194304,
      sha: "de5c057f46b4995651b582db98a7dfe52ac276c2143db08d8d144549bdc2238f",
    },
    {
      fileName: "222-m1.m1",
      size: 131072,
      sha: "a35a0628dd27cb3466c707ae0616bc786bed1ce1bfe7874a79b637cbd52cc249",
    },
    {
      fileName: "222-p1.p1",
      size: 1048576,
      sha: "121416d5c50df9e708bc5a43cc90e3071cfdeb86590fa3d87c165de5a8b7827b",
    },
    {
      fileName: "222-p2.sp2",
      neosdconvFileName: "222-p2.p2",
      size: 4194304,
      sha: "a186a468d94d14d68e31633d54e31b1f065240776d0bc173217f124053ae641e",
    },
    {
      fileName: "222-s1.s1",
      size: 131072,
      sha: "b075557fb70c7788c3ba9fd8ff59f849988875f6d39d7ca89d72e5f5fcc56758",
    },
    {
      fileName: "222-v1.v1",
      size: 4194304,
      sha: "f49c352457ec8d654cad9adb077f8f99a1d597e92a6173b1c38ba3653513da1b",
    },
    {
      fileName: "222-v2.v2",
      size: 4194304,
      sha: "594914cbc8520d55e4f1ef377b0f0cf9acfba8b0fb2eef10c5c1e5dcb3d79e47",
    },
    {
      fileName: "222-v3.v3",
      size: 2097152,
      sha: "823a7fa975286b060179c520fdd678673eadc602e776285dcde7bcd1ec1103cc",
    },
  ],
  hacks: [
    {
      id: "cheatsheet",
      name: "Cheat Sheet",
      creators: ["Matt Greer"],
      incompatibleWith: [],
      repo: "https://github.com/city41/samsho4cs",
      zip: "samsho4csIpsPatches.zip",
      details: [
        "When you pause the game in AES/home mode, your character's move set is shown.",
        "Hold A while paused to see the common moves all characters can use.",
        "This works for both single player and versus mode. Whichever player pauses will see their move list.",
      ],
      screenshots: [
        {
          fileName: "kazuki.png",
          description:
            "Your current player's moves shown when you pause the game.",
        },
        {
          fileName: "common.png",
          description: "The common moves for all players shown when holding A.",
        },
      ],
      downloadAs: ["mame", "neosd"],
    },
  ],
};

export { samsho4 };
