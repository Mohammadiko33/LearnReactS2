import React from 'react'
import { Routes , Route } from 'react-router-dom'
import ReadMe from './components/42.Routes/readme'
import Home from './components/42.Routes/Home'
import Dependency from './components/42.Routes/dependency'
import Dependents from './components/42.Routes/dependents'
import Versions from './components/42.Routes/versions'
import './components/42.Routes/App.css'

export default function App42() {
  return (
    <Routes>
      <Route path='/readMe' element={<ReadMe/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/dependency' element={<Dependency/>}/>
      <Route path='/dependents' element={<Dependents/>}/>
      <Route path='/versions' element={<Versions/>}/>
    </Routes>
  )
}
