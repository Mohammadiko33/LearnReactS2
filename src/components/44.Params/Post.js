import React, { useState } from 'react'
import PostData from './Params'
import paramDatas from './Params'
import { Link } from 'react-router-dom'
export default function Post() {

  const [ posts , setPosts] = useState(PostData)


  return (
    <div>      {paramDatas.map(parData => (
       <>
       <Link to={`/post/${parData.id}`}>{parData.id} LapTop</Link>
       <hr/>
       </>
      ))}</div>
  )
}
