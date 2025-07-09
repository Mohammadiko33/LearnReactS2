import React , {useState} from 'react'

export default function App28() {

 const [users , setUsers] = useState([
  {id: 1, name: 'mohammad' , age: 18},
  {id: 2, name: 'reza' , age: 16},
  {id: 3, name: 'amir' , age: 19},
  {id: 4, name: 'ali' , age: 22},
 ])

 const removeUserHandler = userID => {
     setUsers(prevState => {
      return prevState.filter(user => user.id !== userID)
     })
 }

 const returnUsers = () =>{
  setUsers([
   {id: 1, name: 'mohammad' , age: 18},
  {id: 2, name: 'reza' , age: 16},
  {id: 3, name: 'amir' , age: 19},
  {id: 4, name: 'ali' , age: 22},
  ])
 }

  return (
    <ol style={{display: "flex" , flexDirection: "column"}}>
     {users.map(user => (
      <>
      <li key={user.id} style={{color: "#Fff" , fontSize: "2rem" , marginRight: "1rem"}}>{user.name}</li><button onClick={() => removeUserHandler(user.id)} className="btn btn-danger">Remove</button>
      </>
     ))}
     {users.length || (<button onClick={returnUsers} className='btn btn-primary'>return users</button>)}
    </ol>
  )
}

// هر موقع برای ست استیت نیاز به مقدار قبلی داشتیم حتما حتما به ست استیت یا همون ست یوزر یا ست پروداکت همیشه براش یک ارو فانکشن  به عنوان ورودی ارسال بکنیم  
// و واسه اینکه توی این ارو فانکشن که براش ارسال کردیم به استیت های قبلی هم اکسسس داشته باشیم یک ورودی ازش بگیریم به عنوان پریو استیت