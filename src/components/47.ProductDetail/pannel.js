// import React from 'react'
// import { Navigate } from 'react-router-dom';
// import isLogin from './Utils';

// export default function pannel() {



//   let logedIn = isLogin('mohammad')

//   console.log(logedIn)

//   return (
// <>
//     {
//       logedIn ? (
//         <div style={{textAlign: "center"}}>pannel</div>
//       ) : (
//         <Navigate to="/login"/>
//       )
//     }
// </>
//   )
// }
import React from 'react'

export default function pannel() {

  return (
        <h1 className='tc mt4'>
          Wellcome to Your Pannel
        </h1>
  )
}
