import Hero from "../../components/Hero"

import SalImg from '../../images/salud.jpg'

const Salud = () => {
  return (
    <>
      <Hero 
        titulo='Salud y Bienestar'
        descripcion='El área vocacional perfecta si tienes vocación por el servicio y cuidado de los demás'
        imagen={SalImg}
      />
    </>
  )
}

export default Salud