import React from "react";
import { useState } from "react";
import Title from "./Title";
import ItemBox from "./ItemBox";
import { foods, filterItems } from "../data/data";

export default function FilterableList() {
  const [query, setQuery] = useState("");
  // const [newfoods, setNewFoods] = useState(foods);
  const results = filterItems(foods, query);

  function handleChange(e) {
    setQuery(e.target.value);
    // setNewFoods(filterItems(foods, e.target.value));
  }

  return (
    <>
      <Title>
        {"コンポーネント間で state を共有する（リストのフィルタリング） "}
      </Title>
      <ItemBox>
        <SearchBar query={query} handleChange={handleChange} />
        <hr />
        <List items={results} />
      </ItemBox>
    </>
  );
}

function SearchBar({ query, handleChange }) {
  return (
    <label>
      Search: <input value={query} onChange={handleChange} />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
