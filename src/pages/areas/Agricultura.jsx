import Hero from "../../components/Hero"

import AgrImg from '../../images/agricultura.jpg'

const Agricultura = () => {
  return (
    <>
      <Hero 
        titulo='Agricultura, Silvicultura, Pesca y Veterinaria'
        descripcion='El área vocacional perfecta si te gusta la flora, la fauna y el trabajo en terreno'
        imagen={AgrImg}
      />
    </>
  )
}

export default Agricultura