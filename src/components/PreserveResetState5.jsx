import React from "react";
import { useState } from "react";
import Title from "./Title";
import ItemBox from "./ItemBox";
import Contact from "./Contact";

export default function ContactList() {
  const [reverse, setReverse] = useState(false);

  const displayedContacts = [...contacts];
  if (reverse) {
    displayedContacts.reverse();
  }
  return (
    <>
      <Title>
        {"state の保持とリセット（リスト内の state 位置ズレを修正)"}
      </Title>
      <ItemBox>
        <label>
          <input
            type="checkbox"
            value={reverse}
            onChange={(e) => {
              setReverse(e.target.checked);
            }}
          />{" "}
          Show in reverse order
        </label>
        <ul>
          {displayedContacts.map((contact, i) => (
            // <li key={contact.name}>
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      </ItemBox>
    </>
  );
}

const contacts = [
  { id: 0, name: "Alice", email: "alice@mail.com" },
  { id: 1, name: "Bob", email: "bob@mail.com" },
  { id: 2, name: "Taylor", email: "taylor@mail.com" },
];
