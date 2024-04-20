import React from "react";
import { useState } from "react";
import Title from "./Title";
import ItemBox from "./ItemBox";

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [isReset, setIsReset] = useState(false);

  async function handleClick() {
    setPending((p) => p + 1);
    await delay(3000);
    setPending((p) => p - 1);
    setCompleted((c) => c + 1);
  }

  // 追加
  async function handleResetClick() {
    setIsReset(true);
    await delay(3000);
    setPending(0);
    setCompleted(0);
    setIsReset(() => false);
  }

  return (
    <>
      <Title>
        {"一連の state の更新をキューに入れる（リクエストカウンタの修正) "}
      </Title>
      <ItemBox>
        <h3>Pending: {pending}</h3>
        <h3>Completed: {completed}</h3>
        <button disabled={isReset} onClick={handleClick}>
          Buy
        </button>
        <button onClick={handleResetClick}>{"Reset (3s later)"}</button>
      </ItemBox>
    </>
  );
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
