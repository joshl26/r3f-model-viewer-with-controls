import { proxy } from "valtio";

const state = proxy({
  intro: true,
  colors: [
    "#ffe4c4",
    "#353934",
    "#ccc",
    "#800020",
    "#ffc0cb",
    "#a020f0",
    "#008080",
    "#bfefff",
  ],
  decals: ["react", "three2", "pmndrs"],
  color: "#ffe4c4",
  decal: "three2",
});

export { state };
