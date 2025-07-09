import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div>
       say ho ho <Link to={'/posts/'}>go to products</Link>
    </div>
  )
}
