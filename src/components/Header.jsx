import { useState } from 'react';
import { Link } from 'react-router-dom';

import ItemSubMenu from './ItemSubMenu';
import ItemsAreas from '../assets/AREAS_VOCACIONALES.json'

import LogoPace from '../images/logo pace.png'

// todo: separar los elementos más pequeños en componentes

const HeaderGeneral = function() {

  const [texto, setTexto] = useState('Menú');
  const [clase, setClase] = useState('cerrar');

  // ! tuve que poner los submenus en un objeto, no me gusta mucho pero funciona por ahora
  const [submenus, setSubmenus] = useState(
    {
      estudiar: 'ocultar',
      trabajar: 'ocultar'
    }
  );

  function manejarClic() {
    setTexto(texto === 'Menú' ? 'Cerrar' : 'Menú');
    setClase(clase === 'cerrar' ? 'abrir' : 'cerrar');
  }

  // función para crear un nuevo objeto con los datos actualizados
  function mostrarSubmenu(submenu) {
    setSubmenus(estadoSubmenus => ({
      ...estadoSubmenus,
      [submenu]: estadoSubmenus[submenu] === 'ocultar' ? 'desplegar' : 'ocultar'
    }));
  }

  return (
    <header className={`header ${clase}`}>
      <div 
        className="etiqueta-menu"
        onClick={manejarClic}
      >
        <p className="flecha-header">{texto}</p>
      </div>
      <div className="logo-contenedor">
        <Link to='/'>
          <img 
            className="imagen-logo"
            src={LogoPace}
            alt="logo pace ucsc" />
        </Link>
      </div>

      <nav className="nav">

        <ul className="menu">

          <li className='item-menu'>
            <div
              className="menu-boton">
              <i className="fa-solid fa-house"></i>
              <Link className="texto-item-menu">
                Inicio
              </Link>
            </div>
          </li>

          <li className="item-menu">
            <div 
              onClick={() => mostrarSubmenu('estudiar')}
              className="menu-boton">
              <i className="fa-solid fa-graduation-cap"></i>
              <p className="texto-item-menu">
                Áreas Vocacionales
              </p>
              <span className="flecha">{'>'}</span>
            </div>

            <ul 
              className={`submenu ${submenus.estudiar}`}
            >
              {ItemsAreas.map(item => (
                <ItemSubMenu 
                  key={item.id}
                  enlace={item.enlace}
                  nombre={item.titulo}
                />
              ))}
            </ul>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default HeaderGeneral;
