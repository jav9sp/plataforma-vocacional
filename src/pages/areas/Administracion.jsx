import { useMemo } from "react"

import Hero from "../../components/Hero"
import TablaDatos from '../../components/TablaDatos'
import EnlaceFicha from "../../components/EnlaceFicha"
import PreguntaFrecuente from "../../components/PreguntaFrecuente"

import AdmImg from '../../images/administracion.jpg'
import data from '../../assets/MOCK_DATA.json'

import '../../styles/AreasVocacionales.css'
  
function Administracion() {

  const columns = useMemo(
    () => [
      {
        header: "N°",
        accessorKey: "id"
      },
      {
        header: "Carrera",
        accessorKey: "carrera"
      },
      {
        header: "Institución",
        accessorKey: "institucion"
      },
      {
        header: "Ver ficha",
        accessorKey: "enlace",
        cell: ({ row }) => (

          <div className="centrar-celda">
            {row.original.enlace ? <EnlaceFicha to={row.original.enlace} /> : 'No disponible'}
          </div>
        )
      }
    ]
  )


  return (
    <>
      <Hero 
        titulo='Administración y Negocios'
        descripcion='El área vocacional perfecta si te atrae el mundo empresarial'
        imagen={AdmImg}
        />

      <div className="contenedor">
        <article>
          <div className="descripcion-area">
            <img 
              className="canva-ico"
              src={require('../../images/area-administracion/1.png')} alt="" />
            <p className="texto-descripcion">
              Si has llegado a esta área probablemente te gusta liderar o te interesa saber cómo funciona una empresa por dentro. Ya sean esas tus razones o la simple curiosidad, acá te mostramos las competencias, el campo laboral y las carreras asociadas a esta área vocacional.
            </p>
          </div>

          <div>
            <h2 className="subtitulo">¿Qué necesito saber sobre el área de Administración y Negocios?</h2>
            
            <p className="parrafo">El área de administración está presente en toda organización, sea pública o privada. Las posibilidades para desempeñarse profesionalmente en ésta área son muchísimas y dependerán del perfil que tengas y lo que te gustaría lograr personalmente.</p>
            
            <p className="parrafo">Dentro de las principales sub áreas de la Administración y Negocios podrás encontrar la <span className="resaltado">Gestión Estratégica</span>, las <span className="resaltado">Finanzas y Contabilidad</span>, el <span className="resaltado">Marketing y Ventas</span>, <span className="resaltado">Recursos Humanos</span>, <span className="resaltado">Operaciones y Logística</span>, el <span className="resaltado">Emprendimiento y Startups</span>, la <span className="resaltado">Administración Pública</span>, la <span className="resaltado">Ética y Responsabilidad Social Empresarial</span> y la <span className="resaltado">Consultoría de Negocios</span>.</p>

            <p className="parrafo">Claramente, estudiar una carrera no te prepara para todas las áreas que te mencionamos. Lo más común es que una carrera, ya sea técnica o profesional, te especialice en una de ellas.</p>

            <p className="parrafo">¿A cuál deberías entrar entonces? <span className="resaltado">Identificar tus habilidades, competencias y objetivos personales te ayudará a tomar esa decisión</span>.</p>

          </div>

          <div className="area-info">
            <div className="area-competencias">
              <div>
                <h2 className="subtitulo">Competencias para esta área</h2>

                <div className="competencia-area">
                  <img 
                    className="canva-ico"
                    src={require('../../images/area-administracion/7.png')} 
                    alt="" />
                  <div className="competencia-textos">
                    <p className="parrafo">Mantener orden en la información, el papeleo en la oficina, tener capacidad de gestionar trámites de diverso índole en la empresa. Todo eso requiere una alta capacidad de <span className="resaltado">Organización</span>.</p>
                    
                    
                  </div>
                </div>

                <div className="competencia-area">
                  <div className="competencia-textos">
                    <p className="parrafo">¿Cómo lograr que una empresa crezca? ¿Cómo lograr mayores ventas y resolver posibles problemas antes que aparezcan?</p>
                    
                    <p className="parrafo">Estas habilidades se conocen como <span className="resaltado">Pensamiento Estratégico</span> el cual es fundamental en áreas como el <span className="resaltado">Marketing</span> y <span className="resaltado">Ventas</span>.</p>
                  </div>

                  <img 
                    className="canva-ico"
                    src={require('../../images/area-administracion/2.png')} 
                    alt="" />
                </div>

                <div className="competencia-area">
                  <img 
                    className="canva-ico"
                    src={require('../../images/area-administracion/9.png')} 
                    alt="" />
                  <div className="competencia-textos">
                    <p className="parrafo">Ser capaz de motivar y dirigir equipos de trabajo, tomar decisiones respecto al personal, potenciar las habilidades de cada trabajador/a, todas estas son habilidades de <span className="resaltado">Liderazgo</span> y son esenciales para desempeñar <span className="resaltado">Cargos Directivos</span> o de jefatura.</p>
                    <p className="parrafo">Recuerda: <span className="resaltado">ser jefe no es lo mismo que ser líder.</span></p>
                  </div>
                </div>

                <div className="competencia-area">
                  <div className="competencia-textos">
                    <p className="parrafo">Leer e interpretar estados financieros, generar reportes de gastos de la empresa, monitorear los ingresos y ayudar a la gerencia a tomar decisiones en base a datos. Para lograr eso es necesario desarrollar capacidad de <span className="resaltado">Análisis Financiero</span>.</p>
                    <p className="parrafo">Si las finanzas de una empresa son saludables, es más probable que prospere y pueda pagar a sus trabajadores/as y proveedores.</p>
                  </div>
                  <img 
                    className="canva-ico"
                    src={require('../../images/area-administracion/4.png')} 
                    alt="" />
                </div>
                
                <div className="competencia-area">
                  <img 
                    className="canva-ico"
                    src={require('../../images/area-administracion/8.png')} alt="" />
                  <div className="competencia-textos">
                    <p className="parrafo">¿Cómo mantener buenas relaciones laborales? ¿Cómo resolver problemas? ¿Cómo trabajar en equipo? Simple: desarrollando <span className="resaltado">Habilidades de Comunicación Efectiva</span>.</p>
                    <p className="parrafo">Es importante pulir la habilidad de transmitir tus ideas tanto de manera verbal como escrita. </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="area-campo">
              <h2 className="subtitulo">El campo laboral de esta área</h2>
              <p>El campo laboral de esta área es muy amplio y diverso, ofreciendo oportunidades tanto para trabajar en el sector público como privado.</p>
            </div>
          </div>

          <div className="area-cita">
              <img 
                className="imagen-cita sombra"
                src={require('../../images/area-administracion/warrenbennis.jpg')} 
                alt="foto warren benis"
                />
            <div>
              <cite>El éxito en la administración requiere aprender tan rápido como el mundo está cambiando.</cite>
              <p className="cita-nombre">Warren Bennis - académico pionero en liderazgo</p>
            </div>
          </div>

          <div className="area-tabla">
            <h2 className="subtitulo">Carreras técnicas de esta área</h2>

            <TablaDatos 
              key={data.id}
              data={data}
              columns={columns}
            />

            <h2 className="subtitulo">Carreras profesionales de esta área</h2>

            <TablaDatos 
              key={data.id}
              data={data}
              columns={columns}
            />


          </div>

          <div>
            <h2 className="subtitulo">Preguntas frecuentes sobre esta área</h2>

            <div className="faqs">
              <PreguntaFrecuente 
                pregunta='¿Necesito saber mucha matemática para trabajar en ésta área?'
                respuesta='Se puede decir que esto es un mito, ya que no es necesario tener mucha habilidad matemática. Sin embargo, desarrollarlas te ayudará a desenvolverte mejor profesionalmente.'
              />
              
              <PreguntaFrecuente 
                pregunta='¿Necesito saber mucha matemática para trabajar en ésta área?'
                respuesta='Se puede decir que esto es un mito, ya que no es necesario tener mucha habilidad matemática. Sin embargo, desarrollarlas te ayudará a desenvolverte mejor profesionalmente.'
              />

            </div>

          </div>

        </article>
      </div>
    </>
  )
}

export default Administracion;