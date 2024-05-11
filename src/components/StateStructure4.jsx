import React from "react";
import { useState } from "react";
import Title from "./Title";
import ItemBox from "./ItemBox";
import { letters } from "../data/data";
import Letter from "./Letter2";

export default function MailClient() {
  // const [selectedId, setSelectedId] = useState(null);
  // const [selectedCount, setSelectedCount] = useState(
  //   letters.filter((letter) => letter.isStarred).length
  // );

  // answer 1
  // const [selectedIds, setSelectedIds] = useState([]);

  // answer 2
  const [selectedIds, setSelectedIds] = useState(new Set());

  // TODO: allow multiple selection
  // const selectedCount = 1;

  // answer 1
  // const selectedCount = selectedIds.length;

  // answer 2
  const selectedCount = selectedIds.size;

  // answer 1
  // function handleToggle(toggledId) {
  //   // Was it previously selected?
  //   if (selectedIds.includes(toggledId)) {
  //     // Then remove this ID from the array.
  //     setSelectedIds(selectedIds.filter((id) => id !== toggledId));
  //   } else {
  //     // Otherwise, add this ID to the array.
  //     setSelectedIds([...selectedIds, toggledId]);
  //   }
  // }

  // answer 2
  function handleToggle(toggledId) {
    // Create a copy (to avoid mutation).
    const nextIds = new Set(selectedIds);
    if (nextIds.has(toggledId)) {
      nextIds.delete(toggledId);
    } else {
      nextIds.add(toggledId);
    }
    setSelectedIds(nextIds);
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
              // answer 1
              // isSelected={
              //   selectedIds.includes(letter.id)
              // }
              // answer 2
              isSelected={selectedIds.has(letter.id)}
              onToggle={handleToggle}
            />
          ))}
          <hr />
          <p>
            <b>You selected {selectedCount} letters</b>
          </p>
          {/* <p>
            <b>You selected {selectedId} id letters</b>
          </p> */}
        </ul>
      </ItemBox>
    </>
  );
}
