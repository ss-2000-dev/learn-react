import React from "react";
import { useState } from "react";
import Title from "./Title";
import ItemBox from "./ItemBox";
import { letters } from "../data/data";
import Letter from "./Letter2";

export default function MailClient() {
  const [selectedId, setSelectedId] = useState(null);
  // const [selectedCount, setSelectedCount] = useState(
  //   letters.filter((letter) => letter.isStarred).length
  // );

  // TODO: allow multiple selection
  // const selectedCount = 1;

  function handleToggle(toggledId) {
    // TODO: allow multiple selection
    setSelectedId(toggledId);
    // setSelectedCount(selectedCount + 1);
  }

  return (
    <>
      <Title>{"state 構造の選択（複数選択を実装）"}</Title>
      <ItemBox>
        <h2>Inbox</h2>
        <ul>
          {letters.map((letter) => (
            <Letter
              key={letter.id}
              letter={letter}
              // isSelected={
              //   // TODO: allow multiple selection
              //   letter.id === selectedId
              // }
              onToggle={handleToggle}
            />
          ))}
          <hr />
          <p>{/* <b>You selected {selectedCount} letters</b> */}</p>
          <p>
            <b>You selected {selectedId} id letters</b>
          </p>
        </ul>
      </ItemBox>
    </>
  );
}
