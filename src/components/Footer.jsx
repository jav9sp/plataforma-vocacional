import '../styles/Footer.css'

const Footer = () => {

  const fecha = new Date();
  const actualYear = fecha.getFullYear()

  return (
    <div className="footer-contenedor">

      <footer className="footer">

        <div className="footer-info">

          
          <div className="footer-redes">
            <a href="https://www.instagram.com/paceucsc/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/paceucsc">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.tiktok.com/@paceucsc">
              <i className="fa-brands fa-tiktok"></i>
            </a>
            <a href="https://www.youtube.com/@programapaceucsc6650">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>

          <div className="footer-fuentes">
            <p className='fuentes-texto'>
              Toda la información en esta web ha sido recopilada desde los portales oficiales de cada institución,{` `}
              <a 
                className='link-footer'
                href="https://mifuturo.cl/" target='_blank' 
                rel="noopener noreferrer nofollow"
              >
                mifuturo.cl
              </a>
              , {` `}
              <a 
                className='link-footer'
                href="https://www.cnachile.cl/" target='_blank'
                rel="noopener noreferrer nofollow"
              >
                cnachile.cl
              </a>
              {` `} y el portal {` `}
              <a 
                className='link-footer'
                href="https://www.mineduc.cl/" target='_blank'
                rel="noopener noreferrer nofollow"
              >
                mineduc.cl
              </a>
              .
            </p>
            <p className='fuentes-texto'>Información actualizada en Enero de 2024.</p>
          </div>

        </div>

        <p className='creditos'>Sitio desarrollado con 💕 por el equipo de Exploración Vocacional</p>
        <p className='creditos'>{`PACE UCSC ${actualYear}`}</p>
      </footer>
    </div>
  )
};

export default Footer;