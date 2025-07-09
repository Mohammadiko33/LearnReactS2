import React, { useState } from "react";
import "./components/29.TodoList/App.css";
import Todo from "./components/29.TodoList/Todo";

export default function App29() {
    const [iptValue , setIptValue] = useState("")
    const [todos , setTodos] = useState([])
    const [status , setStatus] = useState("all")
    const putIptValueHandler = e => setIptValue(e.target.value)
    const statusFiltered = e => setStatus(e.target.value)
    const complateATodo = (todoID, e) => setTodos(prevState => prevState.map(todo => todo.id === todoID ? { ...todo, isComplate: !todo.isComplate } : todo ) );
 
 
    const removeATodo = todoID => setTodos(todos.filter(todo => todo.id !== todoID)) 
    const MakeTodo = e => {
     e.preventDefault();
 
     if (iptValue && iptValue.length > 2) {
         let newObj = {
             id: todos.length + 1,
             isComplate: false,
             title: iptValue,
         };
 
         setTodos(prevState => [...prevState, newObj]);
         setIptValue('');
     }
 };
 
  
      let filteredTodos = todos;
      if (status === "completed") {
        filteredTodos = filteredTodos.filter(
          (todo) => todo.isComplate
        );
      } else if (status === "uncompleted") {
        filteredTodos = filteredTodos.filter(
          (todo) => !todo.isComplate
        );
      }
  
      return (
        <div className="todoList">
          <h1 className="todoList_headerTitle">Leach mob Todo List</h1>
  
          <div className="todo_Enter_filter__continer">
            <form
              className="todoEnter_continer"
              onSubmit={MakeTodo}
            >
              <input
                type="text"
                className="todo_Enter"
                placeholder="Enter a Todo"
                maxLength={50}
                onChange={e => putIptValueHandler(e)}
                value={iptValue}
                autoFocus
              />
              <button
                type="submit"
                className="addTodoBTN"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19"
                    stroke="#7D7C7C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 12H19"
                    stroke="#7D7C7C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
            <select
              className="todo_filter__continer"
              onChange={e => statusFiltered(e)}
            >
              <option value="all">all</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
  
          <div className="todos_continer">
            {filteredTodos.map(todo => (
              <Todo
                {...todo}
                key={todo.id}
                onComplate={complateATodo}
                onRemove={removeATodo}
              />
            ))}
          </div>
        </div>
      );
  }