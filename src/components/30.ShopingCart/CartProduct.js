import React, { useState } from 'react'

export default function CartProduct (props) {


  const clickHandler = (id , e) => {
    props.onRemove(id , e)
  }

  const changeQuantityHandler = (id, e) => {
    const quantity = parseInt(e.target.value, 10);
    props.onUpdate(id, quantity);
  }

    return (
      <div className="buyed_produckt">
        <div className="item_buy">
          <img src={props.image} alt={props.name} />
          <p>{props.name}</p>
        </div>
        <div className="price_buy">
          <p className="price">{(props.price * props.quantity).toFixed(2)}</p>
        </div>
        <div className="quantity_buy">
          <input 
            type="number" 
            value={props.quantity} 
            min="1" 
            max="99" 
            onChange={e => changeQuantityHandler(props.id , e)} 
          />
          <button className="remove_btn" onClick={e => clickHandler(props.id , e)}>REMOVE</button>
        </div>
      </div>
    )
}
