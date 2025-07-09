import React from 'react'
import './TodoIsMounting.css'

export default function Todo(props) {


  const removabelHandler = userID => {
    props.onRemove(userID)
  }

  return (
    <div className='todo'>
        <p className='todoTiTle'>{props.title}</p>
        <img src="/31.Asstes/bin.png" alt="bin" onClick={() => removabelHandler(props.id)} className='binImage'/>
    </div>
  )
}
