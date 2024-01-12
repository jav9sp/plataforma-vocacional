import React from 'react'
import TarjetaVocacional from './TarjetaVocacional'
import areas from '../assets/AREAS_VOCACIONALES.json'

function Areas() {
  return (
    <div className="contenedor-textos">
      <h2>¿Qué área vocacional te gustaría conocer?</h2>
      <div className="contenedor-tarjetas">
        {areas.map( area => (
          <TarjetaVocacional
            key={area.id}
            titulo={area.titulo}
            imagen={area.nombre}
            nombre={area.nombre}
            enlace={area.enlace}
          />
        ))}
      </div>
    </div>
  )
}

export default Areas;