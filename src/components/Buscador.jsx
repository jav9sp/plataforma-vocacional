import React from 'react';
import '../styles/Buscador.css';
import { useState, useEffect } from 'react';

const Buscador = function() {

  const [busqueda, setBusqueda] = useState('');

  return (
    <div className="buscador-contenedor">
      <h2 className='buscador-titulo'>Busca tu área vocacional o profesión</h2>
      <div className="input-contenedor">
        <input 
          className='input-buscador' 
          type="search" 
          name="" 
          id="buscador" 
          placeholder='Intenta con "Salud", "Cosmetología"...'
          value={busqueda}
          onChange={ (e) => setBusqueda(e.target.value) } />
        <label htmlFor="buscador">
          <i className="fa-solid fa-magnifying-glass input-icono"></i>
        </label>
      </div>
    </div>
  );
};

export default Buscador;