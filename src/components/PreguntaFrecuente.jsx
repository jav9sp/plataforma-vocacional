import { useState } from "react"

const PreguntaFrecuente = ({pregunta, respuesta}) => {

  const [caja, setCaja] = useState('')
  const [abrir, setAbrir] = useState('+')

  function manejarClic() {
    setAbrir(abrir === '+' ? '-' : '+')
    setCaja(caja === '' ? 'mostrar-respuesta' : '')
  } 

  return (
    <div className="faq-contenedor sombra">
      <div className="faq-header">
        <h3>{pregunta}</h3>
        <p 
          className="faq-btn"
          onClick={manejarClic}
        >
          {abrir}
        </p>
      </div>
      <div className={`faq-body ${caja}`}>
        <p>{respuesta}</p>
      </div>
    </div>
  )
}

export default PreguntaFrecuente