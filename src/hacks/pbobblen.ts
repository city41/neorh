import { RomHackGameEntry } from "@/types";

const pbobblen: RomHackGameEntry = {
  gameName: "Puzzle Bobble",
  mameName: "pbobblen",
  originalFiles: [],
  hacks: [
    {
      id: "pb-precise-controls-hack",
      name: "Precise Controls",
      incompatibleWith: ["rotary-bobble"],
      repo: "https://github.com/city41/pb-precise-controls-hack",
    },
    {
      id: "rotary-bobble",
      name: "Rotary Input",
      incompatibleWith: ["pb-precise-controls-hack"],
      repo: "https://github.com/city41/rotary-bobble",
    },
  ],
};

export { pbobblen };
