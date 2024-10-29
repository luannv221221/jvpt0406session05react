import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './layouts/Header'
import Home from './pages/Home'
import About from './pages/About'
import { Route, Router, Routes } from 'react-router-dom'
import Product from './pages/Product'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
      </Routes>
    </>
  )
}

export default App