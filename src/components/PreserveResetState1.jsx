import React from "react";
import { useState } from "react";
import Title from "./Title";
import ItemBox from "./ItemBox";

export default function App() {
  const [showHint, setShowHint] = useState(false);

  return (
    <>
      <Title>{"state の保持とリセット（入力テキストの消失を修正)"}</Title>
      <ItemBox>
        {showHint && (
          <p>
            <i>Hint: Your favorite city?</i>
          </p>
        )}
        <Form />
        <button
          onClick={() => {
            setShowHint(!showHint);
          }}
        >
          Hide hint
        </button>
      </ItemBox>
    </>
  );
}

function Form() {
  const [text, setText] = useState("");
  const textareaStyle = {
    display: "block",
    margin: "10px 0",
  };
  return (
    <textarea
      style={textareaStyle}
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}
