import React from "react";
import '../styles/TarjetaVocacional.css';
import { Link } from "react-router-dom";

const TarjetaVocacional = ({ enlace, titulo, imagen, nombre }) => {
  return (
    <div className="tarjeta">
      <Link to={enlace} rel="noopener noreferrer">
        <h3 className="titulo-tarjeta">{titulo}</h3>
      </Link>
      <img 
        src={require(`../images/${imagen}.jpg`)} 
        alt={`Area vocacional de ${nombre}`}
        className="imagen-tarjeta" />
    </div>
  )
}

export default TarjetaVocacional;