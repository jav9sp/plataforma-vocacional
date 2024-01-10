import React from "react";
import '../estilos/TarjetaVocacional.css';

const TarjetaVocacional = ({ enlace, titulo, imagen, referencia }) => {
  return (
    <div className="tarjeta">
      <a href={enlace} rel="noopener noreferrer">
        <h3 className="titulo-tarjeta">{titulo}</h3>
      </a>
      <img 
        src={require(`../imagenes/${imagen}.jpg`)} 
        alt={`Area vocacional de ${referencia}`}
        className="imagen-tarjeta" />
    </div>
  )
}

export default TarjetaVocacional;