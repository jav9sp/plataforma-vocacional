import React from 'react';
import { useState, useEffect } from 'react';
import '../estilos/Header.css';
import {debounce} from '../utilidades/utilidades.js'

// ! el componente funciona correctamente, pero logré forzar un error
// ! si hago click rápido en los desplegables la app crushea
// * esto lo solucioné con una función debounce en el archivo utilidades.js
// ! lo intenté con eso y aún así no funciona del todo bien, lo dejaré así por ahora

const HeaderGeneral = function() {

  const [isHeaderShown, setIsHeaderShown] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    // Función para actualizar la altura del submenú
    const updateSubMenuHeight = (menu) => {
      let altura = 0;
      let subMenu = menu.nextElementSibling;
      if (subMenu.clientHeight === 0) {
        altura = subMenu.scrollHeight;
      }
      subMenu.style.height = `${altura}px`;
    };

    // Event listener para los menús desplegables
    const menuDesplegable = document.querySelectorAll('.deplegar');
    menuDesplegable.forEach(menu => {
      menu.addEventListener('click', () => {
        setActiveMenu(menu === activeMenu ? null : menu);
        updateSubMenuHeight(menu);
      });
    });

    // Limpieza del event listener
    return () => {
      menuDesplegable.forEach(menu => {
        menu.removeEventListener('click', updateSubMenuHeight);
      });
    };
  }, [activeMenu]);

  // Función para manejar el click en la flecha del header
  const handleFlechaClick = () => {
    setIsHeaderShown(!isHeaderShown);
  };


  return (
    <header className={`header ${isHeaderShown ? 'mostrar-header' : ''}`}>
      <div className="desplegar-menu" onClick={handleFlechaClick}>
        <p className="flecha-header">{isHeaderShown ? 'Cerrar' : 'Menú'}</p>
      </div>
      <div className="logo-contenedor">
        <img 
          className="imagen-logo"
          src={require(`../imagenes/logo pace.png`)}
          alt="" />
      </div>
      <nav className="nav">

        <ul className="menu">

          <li className="item-menu">
            <div className="menu-boton deplegar">
              <i className="fa-solid fa-graduation-cap"></i>
              <a href="#" className="link-menu">
                Estudiar
              </a>
              <span className="flecha">{'>'}</span>
            </div>

            <ul className="submenu">
              <li className="item-submenu">
                <a href="#" className="link-submenu">Dentro</a>
              </li>
              <li className="item-submenu">
                <a href="#" className="link-submenu">Dentro</a>
              </li>
              <li className="item-submenu">
                <a href="#" className="link-submenu">Dentro</a>
              </li>
              <li className="item-submenu">
                <a href="#" className="link-submenu">Dentro</a>
              </li>
            </ul>
          </li>

          <li className="item-menu">
            <div className="menu-boton deplegar">
              <i className="fa-solid fa-helmet-safety"></i>
              <a href="#" className="link-menu">
                Trabajar
              </a>
              <span className="flecha">{'>'}</span>
            </div>

            <ul className="submenu">
              <li className="item-submenu">
                <a href="#" className="link-submenu">Dentro</a>
              </li>
              <li className="item-submenu">
                <a href="#" className="link-submenu">Dentro</a>
              </li>
              <li className="item-submenu">
                <a href="#" className="link-submenu">Dentro</a>
              </li>
              <li className="item-submenu">
                <a href="#" className="link-submenu">Dentro</a>
              </li>
            </ul>
          </li>

          <li className="item-menu">
            <div className="menu-boton deplegar">
              <i className="fa-solid fa-plane-up"></i>
              <a href="#" className="link-menu">
                FF.AA.
              </a>
              <span className="flecha">{'>'}</span>
            </div>

            <ul className="submenu">
              <li className="item-submenu">
                <a href="#" className="link-submenu">Dentro</a>
              </li>
              <li className="item-submenu">
                <a href="#" className="link-submenu">Dentro</a>
              </li>
              <li className="item-submenu">
                <a href="#" className="link-submenu">Dentro</a>
              </li>
              <li className="item-submenu">
                <a href="#" className="link-submenu">Dentro</a>
              </li>
            </ul>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default HeaderGeneral;
