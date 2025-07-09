import React, { useEffect, useState } from "react";
import "./components/97.pagenations/pagenation.css";
import Datas from './components/97.pagenations/dataArr'
import MoneySVG from "./components/97.pagenations/MoneySVG";

export default function App97() {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTodos, setCurrentTodos] = useState([]);
  const todosPerPage = 6;

  useEffect(() => {
    setTodos(Datas);
  }, []);

  const pageNumber = [];
  
  useEffect(() => {
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    setCurrentTodos(todos.slice(indexOfFirstTodo, indexOfLastTodo));
  }, [currentPage, todos]);
  
  for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
    pageNumber.push(i);
  }

  const punCurrentPage = number => {
    setCurrentPage(number);
  }

  const renderStars = (starCount) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <img
          key={i}
          className={`productStar ${i < starCount ? "" : "productStar__dark"}`}
          src="./97/otherProduct/17-menu-Star.png"
          alt="star"
        />
      );
    }
    return stars;
  };

  return (
    <>
      {!todos ? (
        "Loading ..."
      ) : (
        <div className="main plr5 mb1">
          {currentTodos.map((todo) => (
            <div className="cbh cwss bsnh" key={todo.id}>
              <div className="image_cbh image_cwss ">
                <img className="ofc" src={todo.image} alt="chicken-withSS" />
                <div className="background_cbh"></div>
              </div>
              <div className="main_image_caption">
                <div className="title_image_main">
                  <h3> ‌{todo.title}</h3>
                </div>

                <div className="star_section">
                  {renderStars(todo.starCount)}
                  <span>({todo.starCount > 5 ? 5 : todo.starCount})</span>
                </div>
                <div className="price_main">
                  <span>{todo.price.toLocaleString()}$<MoneySVG/></span>
                  <div className="sabad_price_main cp">
                    <img
                      src="./97/otherProduct/10-main-ShoppingBasket1.svg"
                      alt="ShoppingBasket"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="pagenationBTN w100 djac mc g1 mb1">
        {pageNumber.map((num) => (
          <button
            key={num}
            onClick={() => punCurrentPage(num)}
            className={`btn btn-primary w2-5 h2-5 ${currentPage === num ? "active" : ""}`}
          >
            {num}
          </button>
        ))}
      </div>
    </>
  );
}