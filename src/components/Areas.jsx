import TarjetaArea from './TarjetaArea'
import areas from '../assets/AREAS_VOCACIONALES.json'

function Areas() {
  return (
    <div className="contenedor">
      <h2>¿Qué área vocacional te gustaría conocer?</h2>
      <div className="contenedor-tarjetas">
        {areas.map( area => (
          <TarjetaArea
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