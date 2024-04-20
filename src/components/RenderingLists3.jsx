import React from "react";
import Title from "./Title";
import ItemBox from "./ItemBox";
import { recipes } from "../data/data";

function Recipe({ name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <>
      <Title>{"リストのレンダー（リスト要素のコンポーネントを抽出)"}</Title>
      <ItemBox>
        <h1>Recipes</h1>
        {recipes.map((recipe) => (
          <Recipe {...recipe} key={recipe.id} />
        ))}
      </ItemBox>
    </>
  );
}
