import React from 'react'
import '../styles/Testimonios.css'



const Testimonios = (props) => {
  return (
    <>
    <div className="contenedor-testimonio">
        <img 
        className='imagen-testimonio'
        src={require(`../assets/usuario/testimonio-${props.imagen}.jpg`)} alt="{props.name}"  
        />
        <div className="contenedor-texto testimonio">
            <p className="nombre-testimonio">
              <strong>{props.nombre}</strong> en {props.pais}</p>
            <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
            <p className="texto-testimonio">"{props.testimonio}"</p>
        </div>
    </div>

    </>
  )
}

export default Testimonios