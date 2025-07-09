import React from 'react'
import useFetch from './components/85.custom-hook-fetch/useFetch'
import './components/85.custom-hook-fetch/app.css'

export default function App85() {

 const {
  posts,
  isPending,
  error,
 } = useFetch("https://jsonplaceholder.typicode.com/posts")

  return (
    <div>
     {isPending && <h3> please wait loading ... </h3>}
     {error && <h3>{error}</h3>}
        <table className='mc mr2 ml2 '>
        {posts && (  <tr className=' thead pa df t1 l1-5 r1-5'>
            <div className='dac g-5'>
          <th className='fs-7'>userID :</th>
          <th className='fs-7 mr1'>ID :</th>
          <th className='fs-7'>title :</th>
            </div>
          <th className='fs-7'>body :</th>
          </tr>)}
     {posts && posts.map(post => (
       <tr>
          <td className='w1-5'>{post.userId}</td>
          <td className='w2'>{post.id}</td>
          <td className='fs-7 ttitle'>{post.title}</td>
          <td className='tbody'>{post.body}</td>
        </tr>
        )
      )}
      </table>
    </div>
  )
}
