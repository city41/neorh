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
      creators: ["Matt Greer"],
      incompatibleWith: ["rotary"],
      repo: "https://github.com/city41/pb-precise-controls-hack",
      zip: "",
      details: [
        'A simple hack that brings the "slow controls" from the SNES port into the Neo Geo version.',

        "By holding down B, the joystick will only change one position at a time. This works for player 1 or player 2.",
      ],
      screenshots: [],
    },
    {
      id: "rotary",
      name: "Rotary Input",
      creators: ["Matt Greer"],
      incompatibleWith: ["precise-controls"],
      repo: "https://github.com/city41/rotary-bobble",
      zip: "",
      details: [
        "Changes the controls to be rotary based instead of using a joystick. Really, how the game should have been from the start.",
        "This hack requires building a custom controller",
      ],
      screenshots: [],
    },
  ],
};

export { pbobblen };
