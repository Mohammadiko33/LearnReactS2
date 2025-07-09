import React, { useEffect, useRef, useState } from 'react'

export default function App96() {

const [title , setiTle] = useState("")
const [rrcState , setrrcState] = useState("")
const rrc = useRef(1)

useEffect(() => {
 rrc.current += 1
})

useEffect(() => {
 setrrcState(prev => prev + 1)
}, [])

  return (
    <>
    <h3>Render {rrc.current} with state {rrcState}</h3>
    <input type="text" value={title} onChange={e => setiTle(e.target.value)}/>
    </>
  )
}
