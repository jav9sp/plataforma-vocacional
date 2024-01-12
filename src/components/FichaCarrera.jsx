import React from 'react';
import '../styles/FichaCarrera.css';

const FichaCarrera = function() {
  return (

    <div className="ficha-contenedor">

      <div className="ficha-carrera">

        <section className="ficha-hero">
          <div className='hero-textos'>
            <h1 className="ficha-titulo">Esta es la carrera de...</h1>
            <p className="ficha-descripcion">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minus illo qui obcaecati natus in!
            </p>
          </div>

          <img src={require(`../images/ciencias.jpg`)} alt="" className="ficha-imagen" />
        </section>

        <article className="ficha-articulo">
          
          <section className='ficha-textos'>

            <div className='caja-principal'>
              <div className="caja-contenidos">
                <h2 className="contenido-titulo">¿Qué sabré hacer al terminar la carrera?</h2>
                <p className="contenido-descripcion">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, magni illum natus consequatur optio accusamus, pariatur doloremque iste, cum aspernatur provident facere obcaecati sapiente qui temporibus ipsa ullam aut praesentium!
                </p>
              </div>
              
              <div className="caja-contenidos">
                <h2 className="contenido-titulo">¿Qué características personales pueden ser útiles para esta profesión?</h2>
                <p className="contenido-descripcion">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, magni illum natus consequatur optio accusamus, pariatur doloremque iste, cum aspernatur provident facere obcaecati sapiente qui temporibus ipsa ullam aut praesentium!
                </p>
              </div>
              
              <div className="caja-contenidos">
                <h2 className="contenido-titulo">¿En qué puedo trabajar si estudio esta carrera?</h2>
                <p className="contenido-descripcion">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, magni illum natus consequatur optio accusamus, pariatur doloremque iste, cum aspernatur provident facere obcaecati sapiente qui temporibus ipsa ullam aut praesentium!
                </p>
              </div>
            </div>

            <div className="caja-lateral">
              <div className="caja-contenidos">
                  <h2 className="contenido-titulo">¿Cómo es el mercado laboral para esta profesión?</h2>
                  <p className="contenido-descripcion">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, magni illum natus consequatur optio accusamus, pariatur doloremque iste, cum aspernatur provident facere obcaecati sapiente qui temporibus ipsa ullam aut praesentium!
                  </p>
                  <div className="barra-porcentaje">
                    <div className="barra-color">
                      <span className='valor-porcentaje'>75%</span>
                    </div>
                  </div>
                </div>
            </div>
          </section>

          <section className='ficha-tabla'>
            <h2>¿Dónde puedo estudiar esta carrera?</h2>
            <p>En la siguiente tabla encontrarás el detalle de todas las Instituciones de Educación Superior que tienen esta carrear en el Biobío y Ñuble.</p>


          </section>

        </article>

      </div>

    </div>


  );
};

export default FichaCarrera;