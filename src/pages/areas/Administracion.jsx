import Hero from "../../components/Hero"

import AdmImg from '../../images/administracion.jpg'

function Administracion() {
  return (
    <>
      <Hero 
        titulo='Administración y Negocios'
        descripcion='El área vocacional perfecta si te atrae el mundo empresarial'
        imagen={AdmImg}
      />
    </>
  )
}

export default Administracion