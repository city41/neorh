import { RomHackGameEntry } from "@/types";

const pbobblen: RomHackGameEntry = {
  gameName: "Puzzle Bobble",
  mameName: "pbobblen",
  developer: "Taito",
  year: 1994,
  originalFiles: [],
  hacks: [
    {
      id: "precise-controls",
      name: "Precise Controls",
      author: "Matt Greer",
      incompatibleWith: ["rotary"],
      repo: "https://github.com/city41/pb-precise-controls-hack",
      zip: "",
    },
    {
      id: "rotary",
      name: "Rotary Input",
      author: "Matt Greer",
      incompatibleWith: ["precise-controls"],
      repo: "https://github.com/city41/rotary-bobble",
      zip: "",
    },
  ],
};

export { pbobblen };
