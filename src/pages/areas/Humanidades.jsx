import Hero from "../../components/Hero"

import HumImg from '../../images/humanidades.jpg'

const Humanidades = () => {
  return (
    <>
      <Hero 
        titulo='Artes y Humanidades'
        descripcion='El área vocacional perfecta si te apasionan las letras y el arte'
        imagen={HumImg}
      />
    </>
  )
}

export default Humanidades