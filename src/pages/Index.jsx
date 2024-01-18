import Hero from '../components/Hero'
import AreasVocacionales from '../components/AreasVocacionales'
import Buscador from '../components/Buscador'

import ImgHomeHero from '../images/hero.jpg'


function Index() {
  return (
    <>
      <Hero
        titulo='¡Te ayudo a elegir!'
        descripcion='Todo lo que necesitas para encontrar tu vocación'
        imagen={ImgHomeHero}
      />

      <div className='contenedor'>
        <p>Ser adolescente y estar a puertas de salir del colegio puede ser todo un desafío.</p>
      </div>

      <Buscador />

      <AreasVocacionales />

    </>
  )
}

export default Index