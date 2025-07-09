import React, { useState } from "react";
import PlusSVG from "./components/84.calc/SVGs/PlusSVG";
import ZarbSVG from "./components/84.calc/SVGs/ZarbSVG";
import MinesSVG from "./components/84.calc/SVGs/MinesSVG";
import useCalculator from './components/84.calc/useCalculator'
import "./components/84.calc/app.css";

export default function App84_TesT2() {
  const {
    firstNum,
    secondNum,
    operator,
    handleNumberInput,
    handleOperator,
    reset,
    calculate,
    deleteLastChar,
    formatNumber,
  } = useCalculator();
  const [showMore , setShowMore] = useState(false)

  return (
    <section className="bslm">
      <div className="header">
        <div className="left">
          <img id="img1" src="/84/3line.png" alt="" />
          <p>standard</p>
          <img id="img2" src="/84/small-and-big.png" alt="" />
        </div>
        <div className="right"><img src="/84/null_history.png" alt="" /></div>
      </div>
      <div className="main">
        <div className="up">
        <p id="outpos">
            {operator} {formatNumber(secondNum)}
          </p>
          <p id="result">
            {firstNum ? formatNumber(firstNum) : "0"}
          </p>
        </div>
        <div className="dawn">
          <input type="checkbox" className="dark-black" value="MC" />
          <button className={`${showMore ? "light" : "dark"}-black`} id="cleaer" onClick={() => setShowMore(false)}>MC</button>
          <button className={`${showMore ? "light" : "dark"}-black`}>MR</button>
          <button className="light-black" id="adder">M+</button>
          <input type="checkbox" className="light-black" value="M-" />
          <button className="light-black">M-</button>
          <button className="light-black" onClick={() => setShowMore(true)}>MS</button>
          <button className={`${showMore ? "light" : "dark"}-black`}>M^</button>
        </div>
      </div>
      <div className="footer">
        <div><button className="dark-black" id="baghimande">%</button></div>
        <div><button className="dark-black" id="clean">CE</button></div>
        <div><button className="dark-black" id="remove" onClick={reset} type="reset">C</button></div>
        <div><button className="dark-black" id="delete" onClick={deleteLastChar}><img src="/84/Delete.png" alt="" /></button></div>
        <div><button className="dark-black" id=""><img src="/84/1TMB-X.png" alt="" /></button></div>
        <div><button className="dark-black" id=""><img src="/84/X-TN2.png" alt="" /></button></div>
        <div><button className="dark-black" id=""><img src="/84/2RLX.png" alt="" /></button></div>
        <div><button className="dark-black" id="taghsim" onClick={() => handleOperator("/")}><img src="/84/division.png" alt="" style={{width: ".75rem"}} /></button></div>
        <div><button className="light-black" id="number7" onClick={() => handleNumberInput("7")}>7</button></div>
        <div><button className="light-black" id="number8" onClick={() => handleNumberInput("8")}>8</button></div>
        <div><button className="light-black" id="number9" onClick={() => handleNumberInput("9")}>9</button></div>
        <div><button className="dark-black" id="zarb" onClick={() => handleOperator("*")}><ZarbSVG /></button></div>
        <div><button className="light-black" id="number4" onClick={() => handleNumberInput("4")}>4</button></div>
        <div><button className="light-black" id="number5" onClick={() => handleNumberInput("5")}>5</button></div>
        <div><button className="light-black" id="number6" onClick={() => handleNumberInput("6")}>6</button></div>
        <div><button className="dark-black" id="tafrig" onClick={() => handleOperator("-")}><MinesSVG /></button></div>
        <div><button className="light-black" id="number1" onClick={() => handleNumberInput("1")}>1</button></div>
        <div><button className="light-black" id="number2" onClick={() => handleNumberInput("2")}>2</button></div>
        <div><button className="light-black" id="number3" onClick={() => handleNumberInput("3")}>3</button></div>
        <div><button className="dark-black" id="sum" onClick={() => handleOperator('+')}><PlusSVG /></button></div>
        <div><button className="light-black" id=""><img src="/84/DD.png " alt=""/></button></div>
        <div><button className="light-black" id="number0" onClick={() => handleNumberInput("0")}>0</button></div>
        <div><button className="light-black" id="ashar" onClick={() => handleNumberInput(".")}>.</button></div>
        <div><button className="dark-green" id="mosavi" onClick={calculate}><div className="mosaviContainer dfcjac g-0">=</div></button></div>
      </div>
    </section>
  );
}