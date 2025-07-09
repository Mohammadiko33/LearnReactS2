import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    console.log('i am int todo.js => constructor')

    this.complateTodoHandler =
      this.complateTodoHandler.bind(this);
    this.removeTodoHandler =
      this.removeTodoHandler.bind(this);
  }

  static getDerivedStateFromProps(){
    console.log('i am int todo.js => getDerivedStateFromProps')
  }

  componentDidMount(){  
    console.log('i am int todo.js => componentDidMount')
  }

  complateTodoHandler(id, e) {
    this.props.onComplate(id, e);
  }

  removeTodoHandler(id) {
    this.props.onRemove(id);
  }

  shouldComponentUpdate(props , state){
    console.log('Todo.js => shouldComponentUpdate')
    // if (this.props.title === props.title){
    //   return false 
    // } 
  return true
  }

  render() {
    console.log('i am int todo.js => render')
    let { id, title, isComplate } = this.props;
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
              this.complateTodoHandler(id)
            }
          >
            <img
              src="./7.Assets/tik.png"
              alt=""
            />
          </button>
          <button
            className="todoBtn todoRemoveBTN"
            onClick={() =>
              this.removeTodoHandler(id)
            }
          >
            <img
              src="./7.Assets/satl_ashghal.png"
              alt=""
            />
          </button>
        </div>
      </div>
    );
  }
}
