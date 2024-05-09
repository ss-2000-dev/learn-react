import React from "react";
import { useState } from "react";

export default function Clock(props) {
  // const initialColor = props.color;
  // const [color, setColor] = useState(initialColor);
  // return <h1 style={{ color: initialColor }}>{props.time}</h1>;
  return <h1 style={{ color: props.color }}>{props.time}</h1>;
}
