import React from 'react'
import NavBar from '../componentes/NavBar'
import Testimonios from '../componentes/Testimonios'

const TestimoniosPage = () => {
  return (
    <>
    <NavBar/>
    <div className="App-contenedor">

    <div className='contenedor-principal'>
      <h1>Esto es lo que mis clientes opinan de mi trabajo</h1>
      <Testimonios
        nombre='Melissa Barrios'
        pais='Mexico'
        imagen='meliB'
        cargo='Full Stack developer'
        empresa='kamtali'
        testimonio='nunca crei que podría programar hasta que utilice los metodos de aprendi'
      
      />
      <Testimonios
        nombre='Melissa Barrios'
        pais='Mexico'
        imagen='meliB'
        cargo='Full Stack developer'
        empresa='kamtali'
        testimonio='nunca crei que podría programar hasta que utilice los metodos de aprendi'
      
      />
      <Testimonios
        nombre='Melissa Barrios'
        pais='Mexico'
        imagen='meliB'
        cargo='Full Stack developer'
        empresa='kamtali'
        testimonio='nunca crei que podría programar hasta que utilice los metodos de aprendi'
      
      />
    </div>
    </div>
    </>
  )
}

export default TestimoniosPage