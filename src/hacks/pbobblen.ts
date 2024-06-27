import { RomHackGameEntry } from "@/types";
import { Genre } from "neosdconv/lib/genres";

const pbobblen: RomHackGameEntry = {
  gameName: "Puzzle Bobble",
  mameName: "pbobblen",
  developer: "Taito",
  year: 1994,
  neosdConvertOptions: {
    genre: Genre.Puzzle,
    ngh: "83",
  },
  originalFiles: [
    {
      fileName: "068-c1.c1",
      size: 1048576,
      sha: "6b09f7eb5b86c83b889fee884c27c613a83716f78c9308e75a6c6ee1ce3d9ea6",
    },
    {
      fileName: "068-c2.c2",
      size: 1048576,
      sha: "8772cb813cd320079113d2a5cd2325e336147f9465419b69380afc7c7e21a527",
    },
    {
      fileName: "068-c3.c3",
      size: 1048576,
      sha: "d9d86a5f720c373f0953e64656cdc558653b61e7b287caa467a8e9a83bedccb0",
    },
    {
      fileName: "068-c4.c4",
      size: 1048576,
      sha: "a191b43d0ec2931ff6d8e71cf2059a1cb808cf41b9f1ac6f222d70b98e6f2a49",
    },
    {
      fileName: "068-v1.v1",
      size: 1048576,
      sha: "a26c5140c2ce43bdced4f5c6fdefe0dd2300eb077be571ba4b7978376611d4d4",
    },
    {
      fileName: "068-v2.v2",
      size: 1048576,
      sha: "fcd7ea5c9933a13c718f2351f81a524d681fac69dd91e7fba527713b1731c1a9",
    },
    {
      fileName: "d96-01.v3",
      size: 1048576,
      sha: "a684726d1123a6a388148b42e93141cb308eff1a45b658509ac5cd1c1a1b5215",
    },
    {
      fileName: "d96-02.c5",
      size: 524288,
      sha: "e69c9bee37df657ae1d129aa10f5bc525c60d48db890d884ba0452f5de325e25",
    },
    {
      fileName: "d96-03.c6",
      size: 524288,
      sha: "4ad384a01dad4bc9c2653ba38f87b29e41269b47ab1be516e8be3e382dbf37c3",
    },
    {
      fileName: "d96-04.s1",
      size: 131072,
      sha: "f7b40fc7f807c8edf1592332dd6d289d417ab602dc463636014850a1aa289c27",
    },
    {
      fileName: "d96-05.v4",
      size: 524288,
      sha: "bc6a1ed785725c4fcfaa116a0c9943480b493240268983edaeedaab4f50a718d",
    },
    {
      fileName: "d96-06.m1",
      size: 131072,
      sha: "7f394b283649d9b502bafe5daf7e16e9f36d6f87c90bf5d3aa3b854b7792af57",
    },
    {
      fileName: "d96-07.ep1",
      size: 524288,
      sha: "d833a95ed755c0dbe47f4ef1d85a697a4e2cc6521b416a5f0421c3fb91ce73a0",
    },
  ],
  hacks: [
    {
      id: "precise-controls",
      name: "Precise Controls",
      creators: ["Matt Greer"],
      incompatibleWith: ["rotary"],
      repo: "https://github.com/city41/pb-precise-controls-hack",
      zip: "pbobblenprecise-controlsIpsPatches.zip",
      details: [
        'A simple hack that brings the "slow controls" from the SNES port into the Neo Geo version.',

        "By holding down B, the joystick will only change one position at a time. This works for player 1 or player 2.",
      ],
      screenshots: [],
      downloadAs: ["mame", "neosd"],
    },
    {
      id: "rotary",
      name: "Rotary Input",
      creators: ["Matt Greer"],
      incompatibleWith: ["precise-controls"],
      repo: "https://github.com/city41/rotary-bobble",
      zip: "pbobblenrotaryIpsPatches.zip",
      details: [
        "Changes the controls to be rotary based instead of using a joystick. Really, how the game should have been from the start.",
        "This hack requires building a custom controller, check the hack's website for more info.",
      ],
      screenshots: [],
      youtube: "https://www.youtube.com/watch?v=buq1Kh65goU",
      website: "https://rotary-bobble.mattgreer.dev",
      downloadAs: ["mame", "neosd"],
    },
  ],
};

export { pbobblen };
