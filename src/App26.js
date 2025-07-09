import React , {useState , useEffect} from 'react'
import './components/26.hooks/App.css'

export default function App26() {

 const [count , setCount] = useState(0)
 const [users , setUsers] = useState([
  {id: 1, name: "Mohammad" , age: 18},
  {id: 2, name: "Reza" , age: 16},
  {id: 3, name: "Amir" , age: 19},
  {id: 4, name: "Ali" , age: 22},
 ])

 const plusCount = () => {
   setCount(count + 1)
 }
 const minsCount = () => {
   setCount(count - 1)
 }

  return (
    <>
    <button onClick={plusCount} className='btn btn-light'>+</button>
    <h1>{count}</h1>
    <button onClick={minsCount} className='btn btn-danger'>-</button>
    <hr/>
    <ul>
      {users.map(user => (
       <li style={{color: "#fff"}} key={user.id}>UserName: {user.name} - UserAge: {user.age} </li>
      ))}
    </ul>
    </>
  )
}

// توضیحات 
// هر چیزی که با یوز شروع میشه بهش میگن هوک
// در کلاس کامپوننت ها ما از استیت اضافه میکردیم و گفتیم فانکشنال کامپوننت سرعتش از کلاس کامپوننت ها بیشتره و برای اینکه در فانکشنال کامپوننت ها از چیزی مثل هوک استفاده کنیم 
// مثال ساده بالا نمونه استفاده از هوک هستش