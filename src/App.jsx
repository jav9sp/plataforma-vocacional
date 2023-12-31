import './App.css';
import HeaderGeneral from './componentes/Header';
import HeroPrincipal from './componentes/HeroPrincipal';
import Buscador from './componentes/Buscador';
import TarjetaVocacional from './componentes/TarjetaVocacional';
import FichaCarrera from './componentes/FichaCarrera'
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">

      <FichaCarrera />

      <HeaderGeneral />
      
      <HeroPrincipal
        descripcion='Todo lo que necesitas para explorar tu vocación'
        titulo='¡Te ayudo a elegir!'
        imagen='hero.jpg' 
      />

      <Buscador />

      <div className="contenedor-textos">
        <h2>¿Qué área vocacional te gustaría conocer?</h2>
      </div>
      
      <div className="contenedor-tarjetas">
        <TarjetaVocacional 
          enlace='https://www.google.cl'
          titulo='Administración de empresas y contabilidad'
          imagen='administracion'
          referencia='administracion' />
        <TarjetaVocacional 
          titulo='Agricultura y Silvicultura'
          imagen='agricultura'
          referencia='agricultura' />
        <TarjetaVocacional 
          titulo='Ciencias Naturales y Matemática'
          imagen='ciencias'
          referencia='ciencias' />
        <TarjetaVocacional 
          titulo='Educación'
          imagen='educacion'
          referencia='educacion' />
        <TarjetaVocacional 
          titulo='Arte y Humanidades'
          imagen='humanidades'
          referencia='humanidades' />
        <TarjetaVocacional 
          titulo='Ingeniería'
          imagen='ingenieria'
          referencia='ingenieria' />
        <TarjetaVocacional 
          titulo='Salud'
          imagen='salud'
          referencia='salud' />
        <TarjetaVocacional 
          titulo='Seguridad y FF.AA.'
          imagen='seguridad'
          referencia='seguridad' />
        <TarjetaVocacional 
          titulo='Servicios'
          imagen='servicios'
          referencia='servicios' />
        <TarjetaVocacional 
          titulo='Ciencias Sociales'
          imagen='sociales'
          referencia='sociales' />
        <TarjetaVocacional 
          titulo='Tecnología de la Información'
          imagen='tecnologia'
          referencia='tecnologia' />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
