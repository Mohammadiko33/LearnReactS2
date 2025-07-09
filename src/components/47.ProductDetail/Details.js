import React from "react";

export default function Details(props) {
  return (
    <div className="details_box">
      <h3 className="details_box__type">{props.typeName}:</h3>
      <p className="details_box__title">{props.value}</p>
    </div> 
  );
}
