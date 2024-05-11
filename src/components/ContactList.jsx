import React from "react";

export default function ContactList({ contacts, selectedId, onSelect }) {
  const liStyle = {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "inline-block",
  };
  const ulStyle = {
    listStyle: "none",
    margin: 0,
    padding: 0,
  };

  return (
    <section>
      <ul style={ulStyle}>
        {contacts.map((contact) => (
          <li key={contact.id} style={liStyle}>
            <button
              onClick={() => {
                onSelect(contact.id);
              }}
              style={{ padding: "10px" }}
            >
              {contact.id === selectedId ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
