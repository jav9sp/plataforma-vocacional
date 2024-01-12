import React from "react";
import '../styles/TarjetaVocacional.css';

const TarjetaVocacional = ({ enlace, titulo, imagen, nombre }) => {
  return (
    <div className="tarjeta">
      <a href={enlace} rel="noopener noreferrer">
        <h3 className="titulo-tarjeta">{titulo}</h3>
      </a>
      <img 
        src={require(`../images/${imagen}.jpg`)} 
        alt={`Area vocacional de ${nombre}`}
        className="imagen-tarjeta" />
    </div>
  )
}

export default TarjetaVocacional;