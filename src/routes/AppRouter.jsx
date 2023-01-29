import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import AboutPages from '../pages/AboutPages'
import TestimoniosPage from '../pages/TestimoniosPage'



const AppRouter = () => {
  return (
   
    <Router>
        <Routes>
            <Route path='/' element={< HomePage />} />
            <Route path='/about' element={< AboutPages />} />
            <Route path='/testimonios' element={< TestimoniosPage />} />


        </Routes>
    </Router>
  )
}

export default AppRouter