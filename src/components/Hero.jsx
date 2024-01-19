
const Hero = function({titulo, descripcion, imagen}) {

  return (
    <div 
      className="hero-contenedor"
      style={{
        backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${imagen})`  
      }}
    >
      <div className="hero" >
        <h1 className="hero-titulo">{titulo}</h1>
        <p className="hero-descripcion">{descripcion}</p>
      </div>
    </div>
  )
};

export default Hero;