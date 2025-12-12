import React from "react";

function ColourSelector({ colors, onColorSelect }) {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color, color: "white", padding: "10px" }}
          onClick={() => onColorSelect(color)}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default ColourSelector;
