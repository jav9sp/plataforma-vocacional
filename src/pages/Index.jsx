import HeroPrincipal from '../components/HeroPrincipal'
import Areas from '../components/Areas'
import './Index.css'

function Index() {
  return (
    <>
      <HeroPrincipal />

      <div className='contenedor'>
        <p>Ser adolescente y estar a puertas de salir del colegio puede ser todo un desafío.</p>
      </div>

      <Areas />

    </>
  )
}

export default Index