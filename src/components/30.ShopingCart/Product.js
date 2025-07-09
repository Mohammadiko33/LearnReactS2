import React, { Component } from "react";

export default function Product(props) {


const addTocartHandler = id => {
 props.onAdd(id)
}

    return (
      <div className="album">
        <h3 className="produckt_name">{props.name}</h3>
        {/* <img className="main_image" src="./film82-83-84/225image1.png" /> */}
        <img className="main_image" src={props.image} />
        <div className="btns_prices">
          <p className="price">{props.price}</p>
          <button className="btn btn-primary" onClick={() => addTocartHandler(props.id)}> add to cart </button>
        </div>
      </div>
    );
}
