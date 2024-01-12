import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout';
import Index from './pages/Index';

const router = createBrowserRouter([
  {
    path: '/',
    element: [
      <Index />,
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
