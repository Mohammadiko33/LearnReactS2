import React , { useState , useEffect } from 'react'
import useUpdaterLogger from './components/83.hook-refaktor/useUpdateLogger'

export default function App83() {

const [value , setValue] = useUpdaterLogger('')

  return (
    <input type='text' value={value} onChange={e => setValue(e.target.value)} className='db mc mt15 bslh br10 bnone onone ptb-2 plr-5'/>
  )
}
