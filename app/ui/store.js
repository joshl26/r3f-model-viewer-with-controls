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
    "#000080",
    "#228b22",
    "#00ad43",
    "#32cd32",
    "#a52a2a",
    "#fedf00",
    "#ff9f00",
    "#ff0000",
  ],
  decals: ["react", "three2", "pmndrs"],
  color: "#ffe4c4",
  decal: "three2",
});

export { state };
