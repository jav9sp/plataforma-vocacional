import { useState } from 'react';

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
        <img 
          className="imagen-logo"
          src={require(`../images/logo pace.png`)}
          alt="" />
      </div>

      <nav className="nav">

        <ul className="menu">

          <li className="item-menu">
            <div 
              onClick={() => mostrarSubmenu('estudiar')}
              className="menu-boton">
              <i className="fa-solid fa-graduation-cap"></i>
              <p className="texto-item-menu">
                Estudiar
              </p>
              <span className="flecha">{'>'}</span>
            </div>

            <ul 
              className={`submenu ${submenus.estudiar}`}
            >
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
            <div 
              onClick={() => mostrarSubmenu('trabajar')}
              className="menu-boton">
              <i className="fa-solid fa-graduation-cap"></i>
              <p className="texto-item-menu">
                Trabajar
              </p>
              <span className="flecha">{'>'}</span>
            </div>

            <ul 
              className={`submenu ${submenus.trabajar}`}
            >
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
