import React from 'react';
import '../estilos/Buscador.css';

const Buscador = function() {
  return (
    <div className="buscador-contenedor">
      <h2 className='buscador-titulo'>Busca tu área o profesión</h2>
      <div className="input-contenedor">
        <input className='input-buscador' type="search" name="" id="buscador" placeholder='Intenta con "Salud", "Cosmetología"...' />
        <label htmlFor="buscador">
          <i class="fa-solid fa-magnifying-glass input-icono"></i>
        </label>
      </div>
    </div>
  );
};

export default Buscador;