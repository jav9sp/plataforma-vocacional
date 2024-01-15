import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './components/Layout';
import Index from './pages/Index';
import Buscador from './components/Buscador';


import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: [
      <Index />,
      <Buscador />,
      <Layout />,
    ]
  },
  {
    path: '/areas/administracion',
    element: [
      <Layout />,
    ]
  }
]);

function App() {
  
  return (
    <div className="App">
      <RouterProvider 
        router={router} 
      />
    </div>
  );
}

export default App;
