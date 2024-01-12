import React from "react";
import '../styles/HeroPrincipal.css'
const HeroPrincipal = function( { descripcion, titulo, imagen } ) {

  return (
    <div 
      className="hero-contenedor" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${require(`../images/${imagen}`)})`
      }} >
      <div className="hero">
        <p className="hero-descripcion">{descripcion}</p>
        <h1 className="hero-titulo">{titulo}</h1>
      </div>
    </div>
  )
};

export default HeroPrincipal;