import React, {useState, useRef} from 'react'

export default function App95() {

  const [st , setSt] = useState("mohammad niko")
  const rf = useRef("alexander treyster")

  const changeState = () => {
    setSt("mohammad iKO")
    console.log("this log in change state function method" , st)
  }

  const changeRef = () => {
    rf.current = "alex atori"
    console.log("this log in change state function method" , rf)
  }

  return (
    <div>
      <h3>state {st}</h3>
      <hr/>
      <h3>ref {rf.current}</h3>
      <hr/>
      <button onClick={changeState}>change state</button>
      <br/>
      <button onClick={changeRef}>change ref</button>
    {console.log(rf.current)}
    </div>
  )
}
