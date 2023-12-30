import React from "react";
import ItemMenu from "./ItemMenu";
import '../estilos/Navbar.css'
import { useState } from "react";

const Navbar = () => {

  return (
    <div className="header-contenedor">
      <header className="header">
        <div className="logo-contenedor">
          <img 
            src={require(`../imagenes/logo pace.png`)} 
            alt="" 
            className="logo" />
        </div>
        <nav className="nav">
          <label htmlFor="check-menu" id="label-check"
            ><i class="fa-solid fa-bars"></i>
          </label>
          <input type="checkbox" id="check-menu" />
          <ul className="menu">
            <ItemMenu 
              enlace='#'
              nombre='Inicio' />
            <ItemMenu 
              enlace='#'
              nombre='Estudiar' />
            <ItemMenu 
              enlace='#'
              nombre='Trabajar' />
            <ItemMenu 
              enlace='#'
              nombre='FFAA' />
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;