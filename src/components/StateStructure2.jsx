import React from "react";
import { useState } from "react";
import Title from "./Title";
import ItemBox from "./ItemBox";
import AddItem from "./AddItem";
import PackingList from "./PackingList";

let nextId = 3;
const initialItems = [
  { id: 0, title: "Warm socks", packed: true },
  { id: 1, title: "Travel journal", packed: false },
  { id: 2, title: "Watercolors", packed: false },
];

export default function TravelPlan() {
  const [items, setItems] = useState(initialItems);
  // 冗長な state
  // const [total, setTotal] = useState(3);
  // const [packed, setPacked] = useState(1);

  const total = items.length;
  const packed = items.filter((item) => item.packed).length;

  function handleAddItem(title) {
    setTotal(total + 1);
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false,
      },
    ]);
  }

  function handleChangeItem(nextItem) {
    // 冗長
    // if (nextItem.packed) {
    //   setPacked(packed + 1);
    // } else {
    //   setPacked(packed - 1);
    // }
    setItems(
      items.map((item) => {
        if (item.id === nextItem.id) {
          return nextItem;
        } else {
          return item;
        }
      })
    );
  }

  function handleDeleteItem(itemId) {
    // setTotal(total - 1); // 冗長
    setItems(items.filter((item) => item.id !== itemId));
  }
  return (
    <>
      <Title>{"state 構造の選択（壊れた荷物リストの修正 ) "}</Title>
      <ItemBox>
        <AddItem onAddItem={handleAddItem} />
        <PackingList
          items={items}
          onChangeItem={handleChangeItem}
          onDeleteItem={handleDeleteItem}
        />
        <hr />
        <b>
          {packed} out of {total} packed!
        </b>
      </ItemBox>
    </>
  );
}
