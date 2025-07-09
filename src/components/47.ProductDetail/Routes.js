import NotFound from '../44.Params/NotFound'
import Detail from './Detail'
import About from './About/About'
import Products from './Products'
import Login from './login'
import Pannel from './pannel'
import DashBoard from './DashBoard'
import PrivateRoutes from './PrivateRoutes'

// let router = [
//  {path:'/', element:<h1>main</h1>},
//  {path:'/home' , element:<h1>home</h1>},
//  {path:'/about' , element:<About/>},
//  {path:'/products' , element:<Products/>},
//  {path:'/product/detail/:productID' , element:<Detail/>},
//  {path:'/about/*' , element:<About/> , children: [
//    {path:'crips' , element:<h1 style={{textAlign: 'center'}}>crips</h1>} ,
//    {path:'blood' , element:<h1 style={{textAlign: 'center'}}>blood</h1>} ,
//  ]
//  },
//  {path: '/login' , element: <Login/>},
//  {path: '/pannel' , element: <PrivateRoutes><Pannel/></PrivateRoutes>},
//  {path: '/DashBoard' , element: <PrivateRoutes><DashBoard/></PrivateRoutes>},
//  {path:'*' ,element:<NotFound/>},
// ]
let router = [
 {path:'/', element:<h1 className='tc mt3 fs5'>main</h1>},
 {path:'/home' , element:<h1 className='tc mt3 fs5'>home</h1>},
 {path:'/about' , element:<About/>},
 {path:'/products' , element:<Products/>},
 {path:'/product/detail/:productID' , element:<Detail/>},
 {path:'/about/*' , element:<About/> , children: [
   {path:'crips' , element:<h1 style={{textAlign: 'center'}}>crips</h1>} ,
   {path:'blood' , element:<h1 style={{textAlign: 'center'}}>blood</h1>} ,
 ]
 },
 {path: '/login' , element: <Login/>},
 {path: '/*' , element: <PrivateRoutes/> , children: [
   {path: 'pannel' , element: <Pannel/>},
   {path: 'DashBoard' , element: <DashBoard/>},
 ]},
 {path:'*' ,element:<NotFound/>},
]

export default router

// .br5 border-radius: 0.5rem;

// .br1 border-radius: 1rem;

// .tc text-align: center;

// .mt1 margin-top: 1rem;

// .mt15 margin-top: 15rem;

// .fs1 font-size: 2rem;

// .fs5 font-size: 5rem;