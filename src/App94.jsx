import React , {useEffect, useRef} from 'react'

export default function App94() {

 const myipt = useRef()
 const headTiTle = useRef()

 useEffect(() => {
  console.log(myipt.current)
  myipt.current.focus()
 } , [])

 const setValHandler = () => {
  myipt.current.value = "DRY = Don't Repeat Yourself"
 }

 const setClsHandler = () => {
  headTiTle.current.classList.add("cred")
 }

  return (
   <>
   <h3 ref={headTiTle}>Leach mob</h3>
   <input type="text" ref={myipt} />
   <button onClick={setValHandler}>AddNew Value</button>
   <button onClick={setClsHandler}>AddNew Class</button>
   </>
  )
}

// useRef همیشه و همیشه برای اینکه بخایم به مقدار یک رف دسترسی داشته باشیم بعد اسمش باید بنویسسیم کرینت 