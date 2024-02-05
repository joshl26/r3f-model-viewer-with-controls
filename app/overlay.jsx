import React from "react";
import { useSnapshot } from "valtio";
import { state } from "./ui/store.js";

const Overlay = () => {
  const snap = useSnapshot(state);

  return (
    <div
      style={{
        position: "absolute",
        zIndex: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div className="color-options">
        {snap.colors.map((color) => (
          <div
            key={color}
            className={`circle`}
            style={{ background: color }}
            onClick={() => (state.color = color)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Overlay;
