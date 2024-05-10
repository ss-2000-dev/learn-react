import React from "react";
import { useState } from "react";
import Title from "./Title";
import ItemBox from "./ItemBox";
import { initialLetters } from "../data/data";
import Letter from "./Letter";

export default function MailClient() {
  const [letters, setLetters] = useState(initialLetters);
  const [highlightedId, setHighlightedId] = useState(null);

  function handleHover(letterId) {
    setHighlightedId(letterId);
  }

  function handleStar(starredId) {
    setLetters(
      letters.map((letter) => {
        if (letter.id === starredId) {
          return {
            ...letter,
            isStarred: !letter.isStarred,
          };
        } else {
          return letter;
        }
      })
    );
  }

  return (
    <>
      <Title>{"state 構造の選択（選択項目が消える問題を修正 ) "}</Title>
      <ItemBox>
        <h2>Inbox</h2>
        <ul>
          {letters.map((letter) => (
            <Letter
              key={letter.id}
              letter={letter}
              isHighlighted={letter.id === highlightedId}
              onHover={handleHover}
              onToggleStar={handleStar}
            />
          ))}
        </ul>
      </ItemBox>
    </>
  );
}
