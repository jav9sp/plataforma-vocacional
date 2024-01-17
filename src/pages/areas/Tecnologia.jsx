import Hero from "../../components/Hero"

import TecImg from '../../images/tecnologia.jpg'

const Tecnologia = () => {
  return (
    <>
      <Hero 
        titulo='Tecnología e Información'
        descripcion='El área vocacional perfecta si te apasionan los avances tecnológicos'
        imagen={TecImg}
      />
    </>
  )
}

export default Tecnologia