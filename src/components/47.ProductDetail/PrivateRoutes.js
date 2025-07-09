import React from 'react'
import isLogin from './Utils'
import { Navigate, Outlet } from 'react-router-dom'


export default function PrivateRoutes({ children }) {
 let isUserLogin = isLogin('mohammad');
 return (
     <>
         {
             isUserLogin ? (
                 // children
                 <Outlet />
             ) : (
                 <Navigate to={'/login'} />
             )
         }
     </>
 );
}

