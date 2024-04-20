import React from "react";
import Title from "./Title";
import ItemBox from "./ItemBox";

export default function ColorSwitch({ onChangeColor }) {
  return (
    <>
      <Title>{"イベントへの応答（イベントを接続)"}</Title>
      <ItemBox>
        <button
          onClick={(e) => {
            e.stopPropagation(); // 伝播を停止
            onChangeColor();
          }}
        >
          Change color
        </button>
      </ItemBox>
    </>
  );
}
