import { RomHackGameEntry } from "@/types";

const lastblad: RomHackGameEntry = {
  gameName: "The Last Blade",
  mameName: "lastblad",
  developer: "SNK",
  year: 1997,
  originalFiles: [],
  hacks: [
    {
      id: "minigame",
      creators: ["Matt Greer"],
      name: "Hidden mini game",
      zip: "",
      repo: "https://github.com/city41/lbmini",
      incompatibleWith: [],
      details: [
        "The developers of the game hid a mini game deep inside of it. It's normally tricky to get to.",
        "This hack has the mini game play instead of the attract mode.",
      ],
      screenshots: [],
    },
  ],
};

export { lastblad };
