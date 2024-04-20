import React from "react";
import { useState } from "react";
import Title from "./Title";
import ItemBox from "./ItemBox";
import Background from "./Background";
import Box from "./Box";

const initialPosition = {
  x: 0,
  y: 0,
};

export default function Canvas() {
  const [shape, setShape] = useState({
    color: "orange",
    position: initialPosition,
  });

  function handleMove(dx, dy) {
    setShape({
      ...shape,
      position: {
        x: shape.position.x + dx,
        y: shape.position.y + dy,
      },
    });
  }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value,
    });
  }

  function handleReset() {
    setShape({
      ...shape,
      color: "orange",
      position: { ...initialPosition },
    });
  }

  return (
    <>
      <Title>
        {"state 内のオブジェクトの更新（ミューテーションを探して修正）"}
      </Title>
      <ItemBox>
        <select value={shape.color} onChange={handleColorChange}>
          <option value="orange">orange</option>
          <option value="lightpink">lightpink</option>
          <option value="aliceblue">aliceblue</option>
        </select>
        <button onClick={handleReset}>Reset</button>
        <Background position={initialPosition} />
        <Box color={shape.color} position={shape.position} onMove={handleMove}>
          Drag me!
        </Box>
      </ItemBox>
    </>
  );
}
