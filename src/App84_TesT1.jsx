import React, { useState } from "react";
import "./components/84.CToF/app.css";
import useTemperatureConverter from './components/84.CToF/useTemperatureConverter'
import Btn from "./components/btn/Btn";


export default function App84_TesT1() {
  const {
    inputValue,
    putInputValue,
    result,
    fromUnit,
    toUnit,
    convert,
    swapUnits,
    reset,
    opa,
  } = useTemperatureConverter();

  

  return (
    <>
      <section className="convert">
        <h1 className="header__title">
          convert{" "}
          <b id={fromUnit} className="fs2">
            °{fromUnit}
          </b>{" "}
          to
          <b id={toUnit} className="fs2">
            °{toUnit}
          </b>
        </h1>
        <div className="ipts">
          <input
            type="number"
            placeholder={`°${fromUnit}`}
            className="main_input"
            value={inputValue}
            onChange={e => putInputValue(+e.target.value)}
          />
        </div>
        <p className="result" style={{opacity: opa}}>
          convert result: °{fromUnit} {inputValue} to °{toUnit} {result.toFixed(2)}
        </p>
        <div className="footer">
          <Btn
            title="RESET"
            onClick={reset}
            id="reset"
            fs={"footer__botton bscu2 btnh2"}
          />
          <Btn 
            title="CONVERT" 
            onClick={convert}
            id="convert" 
            fs={"footer__botton bscu2 btnh2"} 
          />
          <Btn
            onClick={swapUnits}
            title="CHANGE"
            id="change"
            fs={"footer__botton bscu2 btnh2"}
          />
        </div>
      </section>
    </>
  );
}