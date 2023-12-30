import React from "react";
import ItemMenu from "./ItemMenu";
import '../estilos/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-redes">
          <h4 className="footer-redes-titulo">¡No olvides seguirnos!</h4>
          <a href="https://www.instagram.com/paceucsc/">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/paceucsc">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.tiktok.com/@paceucsc">
            <i class="fa-brands fa-tiktok"></i>
          </a>
          <a href="https://www.youtube.com/@programapaceucsc6650">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
      <p>
        Hecho con 💕 por el equipo de<br />Exploración Vocacional del PACE UCSC
      </p>
    </footer>
  )
};

export default Footer;