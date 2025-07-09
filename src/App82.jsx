import React , { useState , useEffect } from 'react'
import useUpdater from './components/82.hook/useUpdater'

export default function App82() {

// wave1 : 

const [iptValue , setIptValue] = useState('')

useEffect(() => {
  console.log("your input value: " + iptValue)
}, [iptValue])


// wave2 (is batter then wave1): 

useUpdater(iptValue)

  return (
    <input type='text' value={iptValue} onChange={e => setIptValue(e.target.value)} className='db mc mt15 bslh br10 bnone onone ptb-2 plr-5 fwMedium'/>
  )
}
