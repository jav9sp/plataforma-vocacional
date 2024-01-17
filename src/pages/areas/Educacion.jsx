import Hero from "../../components/Hero"

import EduImg from '../../images/educacion.jpg'

const Educacion = () => {
  return (
    <>
      <Hero 
        titulo='Educación y Pedagogía'
        descripcion='El área vocacional perfecta si tienes vocación por la enseñanza'
        imagen={EduImg}
      />
    </>
  )
}

export default Educacion