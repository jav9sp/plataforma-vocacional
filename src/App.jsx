import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HeaderGeneral from './components/Header';
import HeroPrincipal from './components/HeroPrincipal';
import Buscador from './components/Buscador';
import TarjetaVocacional from './components/TarjetaVocacional';
import AreaVocacional from './components/AreaVocacional';
import FichaCarrera from './components/FichaCarrera'
import Footer from './components/Footer';
import './assets/AREAS_VOCACIONALES.json'

function App() {
  
  return (
    <div className="App">

      
      {/* <div className="contenedor-area-vocacional">
        <AreaVocacional />
      </div> */}

      <HeaderGeneral />

      <AreaVocacional 
        titulo='Administración de Empresas'
        descripcion='Descripción'
        imagen='administracion'
      />
      
      {/* <HeroPrincipal
        descripcion='Todo lo que necesitas para explorar tu vocación'
        titulo='¡Te ayudo a elegir!'
        imagen='hero.jpg' 
      />

      <Buscador /> */}

      <div className="contenedor-textos">
        <h2>¿Qué área vocacional te gustaría conocer?</h2>
      </div>
      
      <div className="contenedor-tarjetas">
        <TarjetaVocacional 
          enlace='https://www.google.cl'
          titulo='Administración de empresas y contabilidad'
          imagen='administracion'
          nombre='administracion' />
        <TarjetaVocacional 
          titulo='Agricultura y Silvicultura'
          imagen='agricultura'
          nombre='agricultura' />
        <TarjetaVocacional 
          titulo='Ciencias Naturales y Matemática'
          imagen='ciencias'
          nombre='ciencias' />
        <TarjetaVocacional 
          titulo='Educación'
          imagen='educacion'
          nombre='educacion' />
        <TarjetaVocacional 
          titulo='Arte y Humanidades'
          imagen='humanidades'
          nombre='humanidades' />
        <TarjetaVocacional 
          titulo='Ingeniería'
          imagen='ingenieria'
          nombre='ingenieria' />
        <TarjetaVocacional 
          titulo='Salud'
          imagen='salud'
          nombre='salud' />
        <TarjetaVocacional 
          titulo='Seguridad y FF.AA.'
          imagen='seguridad'
          nombre='seguridad' />
        <TarjetaVocacional 
          titulo='Servicios'
          imagen='servicios'
          nombre='servicios' />
        <TarjetaVocacional 
          titulo='Ciencias Sociales'
          imagen='sociales'
          nombre='sociales' />
        <TarjetaVocacional 
          titulo='Tecnología de la Información'
          imagen='tecnologia'
          nombre='tecnologia' />
      </div>
      
      <Footer /> 
    </div>
  );
}

export default App;
