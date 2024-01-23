import Hero from '../components/Hero'
import AreasVocacionales from '../components/AreasVocacionales'
import Buscador from '../components/Buscador'

import ImgHomeHero from '../images/hero.jpg'


function Inicio() {
  return (
    <>
      <Hero
        titulo='¡Te ayudo a elegir!'
        descripcion='Explora tu área vocacional y planifica tu futuro'
        imagen={ImgHomeHero}
      />

      <div className='contenedor'>
        <p className='texto-descripcion'>Decidir qué hacer al salir de colegio puede ser todo un desafío. Habiendo tanta información por todos lados es muy fácil perderse.</p>
        <p className='texto-descripcion'>Por eso, en esta web te ayudamos a explorar las diferentes áreas vocacionales y encontrar la información que necesitas para definir tu vocación.</p>
      </div>

      <div className="contenedor">
        <h2>¿Cómo navegar por esta página?</h2>
        <div className="flex">
          <h3>Usa nuestro buscador</h3>
          <i className="fa-solid fa-magnifying-glass"></i>
          <p>En él podrás encontrar un el listado completo de carreras técnicas y profesionales en el Biobío y Ñuble</p>
        </div>
      </div>

      <Buscador />

      <AreasVocacionales />

    </>
  )
}

export default Inicio