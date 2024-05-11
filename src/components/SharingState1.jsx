import React from "react";
import { useState } from "react";
import Title from "./Title";
import ItemBox from "./ItemBox";

export default function SyncedInputs() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <Title>{"コンポーネント間で state を共有する（入力欄の同期） "}</Title>
      <ItemBox>
        <Input label="First input" value={text} onChange={handleChange} />
        <Input label="Second input" value={text} onChange={handleChange} />
      </ItemBox>
    </>
  );
}

function Input({ label, value, onChange }) {
  return (
    <label>
      {label} <input value={value} onChange={onChange} />
    </label>
  );
}
