import { useState } from 'react';

import TablaDatos from './TablaDatos';

import data from '../assets/MOCK_DATA.json';
import { tablaGeneral as columns } from '../utilities/dataTablas.js';

const Buscador = function() {

  const [filtering, setFiltering] = useState('')
  
  return (

    <div className="contenedor-buscador">
      
      <h2 className='buscador-titulo'>Busca tu área vocacional o profesión</h2>
      
      <div className="input-contenedor">
        
        <input 
          className='input-buscador' 
          type="search" 
          placeholder='Intenta con "Salud", "Cosmetología"...'
          value={filtering}
          onChange={ e => setFiltering(e.target.value) } 
        />
        
        <label htmlFor="buscador">
          <i className="fa-solid fa-magnifying-glass input-icono"></i>
        </label>
      
      </div>

      {filtering && 
        <div className="contenedor-tabla">
          <TablaDatos
            data={data}
            columns={columns}
            filtering={filtering}
            setFiltering={setFiltering}
          />
        </div>
      }

    </div>
  );
};

export default Buscador;