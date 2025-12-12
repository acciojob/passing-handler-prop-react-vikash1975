
import App from "../styles/App.css";
import React, { useState } from "react";

function Selection({ selectedColor }) {
  const [color, setColor] = useState("white"); // default

  const handleClick = () => {
    setColor(selectedColor); // apply currently selected color
  };

  return (
    <div
      className="fix-box"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    ></div>
  );
}

export default Selection;


