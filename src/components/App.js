

import React, { useState } from "react";
import ColourSelector from "./ColourSelector";
import Selection from "./Selection";

function App() {
  const [selectedColor, setSelectedColor] = useState("white");

  return (
    <div>
      <h1>Handler Prop Demo</h1>

      {/* Color buttons */}
      <ColourSelector
        colors={["red", "green", "blue", "yellow", "orange"]}
        onColorSelect={setSelectedColor}
      />

      {/* Three independent boxes */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <Selection selectedColor={selectedColor} />
        <Selection selectedColor={selectedColor} />
        <Selection selectedColor={selectedColor} />
      </div>
    </div>
  );
}

export default App;


