import React from "react";
import { useState, useEffect } from "react";
import Title from "./Title";
import ItemBox from "./ItemBox";
import Clock from "./Clock";

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function App() {
  const time = useTime();
  const [color, setColor] = useState("lightcoral");
  return (
    <>
      <Title>{"state 構造の選択（更新されないコンポーネントの修正 ) "}</Title>
      <ItemBox>
        <p>
          Pick a color:{" "}
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="lightcoral">lightcoral</option>
            <option value="midnightblue">midnightblue</option>
            <option value="rebeccapurple">rebeccapurple</option>
          </select>
        </p>
        <Clock color={color} time={time.toLocaleTimeString()} />
      </ItemBox>
    </>
  );
}
