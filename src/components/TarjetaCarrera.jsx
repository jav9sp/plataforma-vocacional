import '../styles/TarjetaCarrera.css'

const TarjetaResultado = ({ nombre, institucion, tipo, sedes }) => {
  return (
    <div className="tarjeta-carrera">
      <div>
        <h3 className="nombre">{nombre}</h3>
        <span className="institucion">{institucion}</span>
        <span className="tipo">{tipo}</span>
      </div>
      <div>
        <h4>Sedes:</h4>
        <span className="sedes">{sedes}</span>
      </div>
      <button className='ver-mas'>Ver carrera</button>
    </div>
  )
}

export default TarjetaResultado;