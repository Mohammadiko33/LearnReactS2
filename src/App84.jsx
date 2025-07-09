import React, { useState, useEffect } from "react";
import useCount from './components/84.cunter-customHook/counter'

export default function App84() {
 const [count, addCount, minsCount] = useCount(0);
 
 return (
   <div className="h100vh djac g1">
     <button onClick={minsCount} className="ptb-5 plr1-2 br10 fs1-2 fwMedium bslm">-</button>
     <span className="tswh bgnone">{count}</span>
     <button onClick={addCount} className="ptb-7 plr1-2 br10 fs1-2 fwMedium bslm">+</button>
   </div>
  );
}
