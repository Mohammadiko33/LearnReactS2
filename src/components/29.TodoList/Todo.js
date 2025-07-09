import React, { useState } from "react";
import "./Todo.css";

export default function Todo(props){

  const complateTodoHandler = (id, e) => props.onComplate(id, e);
  const removeTodoHandler = id => props.onRemove(id);
  

    let { id, title, isComplate } = props;
    return (
      <div
        className={`todo ${
          isComplate ? "todoComplate" : ""
        }`}
      >
        <p className="todo_title">{title}</p>
        <div className="todo_btns">
          <button
            className="todoBtn todoComplateBTN"
            onClick={() =>
              complateTodoHandler(id)
            }
          >
            <img
              src="./29.Assets/tik.png"
              alt=""
            />
          </button>
          <button
            className="todoBtn todoRemoveBTN"
            onClick={() =>
              removeTodoHandler(id)
            }
          >
            <img
              src="./29.Assets/satl_ashghal.png"
              alt=""
            />
          </button>
        </div>
      </div>
    );
}
