import React, { useState, useEffect } from "react";

export default function App34() {
  let [count, setCount] = useState(0);

  // // Noob Sag :
  // function plusCount (){
  //    count = count + 1
  //    console.log(count)
  // }

  // function minsCount (){
  //   count = count - 1
  //   console.log(count)
  // }

  //  // junior :

  // const plusCount = () => {
  //   setCount(count + 1)
  //   setCount(count + 1)
  // }
  // const minsCount = () => {
  //   setCount(count - 1)
  //   setCount(count - 1)
  // }

  // middle :
  const plusCount = () => setCount((prevState) => prevState + 1);
  const minsCount = () => setCount((prevState) => prevState - 1);

  return (
    <>
      <button onClick={plusCount} className="btn btn-light">
        +
      </button>
      <h1>{count}</h1>
      <button onClick={minsCount} className="btn btn-danger">
        -
      </button>
    </>
  );
}
