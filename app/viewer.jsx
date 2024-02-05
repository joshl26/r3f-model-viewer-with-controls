import React from "react";
import Canvas from "./canvas";

const Viewer = () => {
  return (
    <div>
      <h1 style={{ color: "black" }}>Viewer</h1>
      <div style={{ height: "100px" }}></div>
      <div
        style={{
          margin: "auto",
          border: "1px solid black",
          height: "500px",
          width: "500px",
        }}
      >
        <Canvas />
      </div>
    </div>
  );
};

export default Viewer;
