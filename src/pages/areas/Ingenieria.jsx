import Hero from "../../components/Hero"

import IngImg from '../../images/ingenieria.jpg'

const Ingenieria = () => {
  return (
    <>
      <Hero 
        titulo='Ingeniería y Construcción'
        descripcion='El área vocacional perfecta si intriga el cómo resolver problemas y construir soluciones'
        imagen={IngImg}
      />
    </>
  )
}

export default Ingenieria