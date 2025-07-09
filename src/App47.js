import React from 'react'
import { Routes , Route , useRoutes, useLocation } from 'react-router-dom'
import Header from './components/47.ProductDetail/header'
import './components/47.ProductDetail/App.css'
import NotFound from './components/44.Params/NotFound'
import Products from './components/47.ProductDetail/Products'
import Detail from './components/47.ProductDetail/Detail'
import About from './components/47.ProductDetail/About/About'
import routers from './components/47.ProductDetail/Routes'
import { Location } from 'react-router-dom'


export default function App47() {

  let location = useLocation()

  console.log(location)

  let router = useRoutes(routers)

  return (
    <>
      <Header></Header>
      {router}
 </>
  )
}
