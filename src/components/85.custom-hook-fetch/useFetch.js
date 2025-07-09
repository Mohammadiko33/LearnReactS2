import React, { useEffect, useState } from 'react'

export default function useFetch(props) {

 const [posts , setPosts] = useState(null)
 const [isPending , setIsPending] = useState(true)
 const [error , setError] = useState(null)

 useEffect(() => {
   fetch(props)
     .then(res => res.json())
        .then(res => {
          console.log(res)
        setPosts(res)
        setIsPending(false)
        })
     .catch(err => {
      setError(err)
      console.log(err)
      setIsPending(false)
     })
 },[])

 return {
 posts,
isPending,
error,
 }
}
