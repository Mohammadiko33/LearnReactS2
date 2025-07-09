import React from "react";
import "./btn.css";

export default function Btn(props) {
  return (
    <button
      className={`btn ${props.fs}`}
      onClick={props.onClick}
      style={props.os}
    >
      {props.title}
    </button>
  );
}

// what the mean fs and os : /||\ fs: fast styles || os: other styles
