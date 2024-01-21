import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout';
import Index from './pages/Index';
import Administracion from './pages/areas/Administracion';
import Agricultura from './pages/areas/Agricultura';
import CienciasMatematica from './pages/areas/CienciasMatematica';
import Educacion from './pages/areas/Educacion';
import Humanidades from './pages/areas/Humanidades';
import Ingenieria from './pages/areas/Ingenieria';
import Salud from './pages/areas/Salud';
import Seguridad from './pages/areas/Seguridad';
import Servicios from './pages/areas/Servicios';
import Sociales from './pages/areas/Sociales';
import Tecnologia from './pages/areas/Tecnologia';
import FichaCarrera from './components/FichaCarrera';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <FichaCarrera />
      },
      {
        path: '/areas/administracion',
        element: <Administracion />
      },
      {
        path: '/areas/agricultura',
        element: <Agricultura />
      },
      {
        path: '/areas/ciencias-y-matematica',
        element: <CienciasMatematica />
      },
      {
        path: '/areas/educacion',
        element: <Educacion />
      },
      {
        path: '/areas/humanidades',
        element: <Humanidades />
      },
      {
        path: '/areas/ingenieria',
        element: <Ingenieria />
      },
      {
        path: '/areas/salud',
        element: <Salud />
      },
      {
        path: '/areas/seguridad',
        element: <Seguridad />
      },
      {
        path: '/areas/servicios',
        element: <Servicios />
      },
      {
        path: '/areas/sociales',
        element: <Sociales />
      },
      {
        path: '/areas/tecnologia',
        element: <Tecnologia />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider 
      router={router}
    />
  </React.StrictMode>,
)