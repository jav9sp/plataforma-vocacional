import Hero from "../../components/Hero"

import ServImg from '../../images/servicios.jpg'

const Servicios = () => {
  return (
    <>
      <Hero 
        titulo='Servicios Personales'
        descripcion='El área vocacional perfecta si tienes vocación por el servicio a los demás'
        imagen={ServImg}
      />
    </>
  )
}

export default Servicios