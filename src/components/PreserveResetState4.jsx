import React from "react";
import { useState } from "react";
import Title from "./Title";
import ItemBox from "./ItemBox";

export const imgStyle = {
  width: "150px",
  height: "150px",
};

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const hasNext = index < images.length - 1; // true or false

  function handleClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  let image = images[index];

  return (
    <>
      <Title>{"state の保持とリセット（読み込み中に画像をクリア)"}</Title>
      <ItemBox>
        <button onClick={handleClick}>Next</button>
        <h3>
          Image {index + 1} of {images.length}
        </h3>
        <img key={image.src} src={image.src} style={imgStyle} />
        <p>{image.place}</p>
      </ItemBox>
    </>
  );
}

let images = [
  {
    place: "Penang, Malaysia",
    src: "https://i.imgur.com/FJeJR8M.jpg",
  },
  {
    place: "Lisbon, Portugal",
    src: "https://i.imgur.com/dB2LRbj.jpg",
  },
  {
    place: "Bilbao, Spain",
    src: "https://i.imgur.com/z08o2TS.jpg",
  },
  {
    place: "Valparaíso, Chile",
    src: "https://i.imgur.com/Y3utgTi.jpg",
  },
  {
    place: "Schwyz, Switzerland",
    src: "https://i.imgur.com/JBbMpWY.jpg",
  },
  {
    place: "Prague, Czechia",
    src: "https://i.imgur.com/QwUKKmF.jpg",
  },
  {
    place: "Ljubljana, Slovenia",
    src: "https://i.imgur.com/3aIiwfm.jpg",
  },
];
