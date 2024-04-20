import React from "react";
import Title from "./Title";
import ItemBox from "./ItemBox";

function Item({ name, isPacked }) {
  return (
    <li className="packing-item">
      {name} {isPacked ? "✔" : "❌"}
    </li>
  );
}

export default function PackingList() {
  return (
    <>
      <Title>{"条件付きレンダー（? : を使って未梱包アイコンを表示)"}</Title>
      <ItemBox>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item isPacked={true} name="Space suit" />
          <Item isPacked={true} name="Helmet with a golden leaf" />
          <Item isPacked={false} name="Photo of Tam" />
        </ul>
      </ItemBox>
    </>
  );
}
