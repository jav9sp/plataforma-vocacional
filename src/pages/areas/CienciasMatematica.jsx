import Hero from "../../components/Hero"

import CsMatImg from '../../images/ciencias.jpg'

const CienciasMatematica = () => {
  return (
    <>
      <Hero 
        titulo='Ciencias Naturales y Matemática'
        descripcion='El área vocacional perfecta si te gustan los números y las ciencias exactas'
        imagen={CsMatImg}
      />
    </>
  )
}

export default CienciasMatematica