import React from "react";
import Title from "./Title";
import ItemBox from "./ItemBox";

const drinks = {
  tea: {
    part: "leaf",
    caffeine: "15–70 mg/cup",
    age: "4,000+ years",
  },
  coffee: {
    part: "bean",
    caffeine: "80–185 mg/cup",
    age: "1,000+ years",
  },
};

function Drink({ name }) {
  const info = drinks[name];
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{info.part}</dd>
        <dt>Caffeine content</dt>
        <dd>{info.caffeine}</dd>
        <dt>Age</dt>
        <dd>{info.age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <>
      <Title>{"条件付きレンダー（? : を使って未梱包アイコンを表示)"}</Title>
      <ItemBox>
        <Drink name="tea" />
        <Drink name="coffee" />
      </ItemBox>
    </>
  );
}
