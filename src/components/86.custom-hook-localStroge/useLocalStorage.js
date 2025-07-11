import { useState, useEffect } from 'react';

export default function useLocalStorage(key, initialValue) {
 const [value, setValue] = useState(() => {
  const storedValue = localStorage.getItem(key);
  return storedValue !== null ? JSON.parse(storedValue) : initialValue;
 });

 useEffect(() => {
  localStorage.setItem(key, JSON.stringify(value));
 }, [key, value]);

 return { value, setValue };
}