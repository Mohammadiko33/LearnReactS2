import React, { useEffect, useState } from 'react'

export default function useUpdateLogger(iptValue) {

 const [value, setValue] = useState(iptValue)

 useEffect(() => {
  console.log(value)
 }, [value])

 return [value, setValue]
}
