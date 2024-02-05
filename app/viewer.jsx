"use client";

import React from "react";
import Canvas from "./canvas";
import Overlay from "./overlay";

const Viewer = () => {
  return (
    <div>
      <div style={{ height: "25px" }}></div>
      <div
        style={{
          margin: "auto",
          border: "1px solid black",
          height: "500px",
          width: "500px",
        }}
      >
        <Overlay />
        <Canvas />
      </div>
    </div>
  );
};

export default Viewer;
