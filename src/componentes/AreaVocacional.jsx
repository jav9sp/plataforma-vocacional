import TarjetaCarrera from './TarjetaCarrera';
import TablaDatos from './TablaDatos';
import '../estilos/AreaVocacional.css';


function AreaVocacional({titulo, imagen, descripcion, competencias, }) {

  return (

    <div className='contenedor'>

      <div 
        className='hero-vocacional'
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${require(`../imagenes/${imagen}.jpg`)})`
        }}
      >
    
        <h1 className='titulo-vocacional'>{titulo}</h1>
      </div>

      <div className='contenedor-area-vocacional'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga labore molestias delectus voluptatum maxime quam adipisci, repudiandae cum eos deleniti quod, quasi enim placeat rem. Ab quam deleniti officia. Saepe.</p>
      
        <h2>¿Qué competencias son necesarias para desenvolverse en ésta área?</h2>
      
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio sit aperiam reiciendis debitis voluptatibus non dolore voluptate! Ipsum, error ullam?</p>
      
      
        <h2>Acá puedes ver todas las carreras de ésta área</h2>
        <div className='listado-carreras'>

          <TablaDatos />
      
        </div>
      </div>
    </div>

  )
}

export default AreaVocacional;