import React from 'react';
import useLocalStorage from './components/86.custom-hook-localStroge/useLocalStorage';

export default function App86() {
  const { value, setValue } = useLocalStorage("inputValue", "");

  return (
    <div className='h100vh djac'>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} className='bnone br10 fs1-5 plr1' />
    </div>
  );
}