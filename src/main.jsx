import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import PaginaHome from './Home/PaginaHome.jsx'
import PaginaPop from './POP/PaginaPop.jsx'
import PaginaRamal from './Ramal/PaginaRamal.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaHome/>, // Componente principal que pode incluir um Layout
  },

  {
    path: "/pop",

    element: <PaginaPop/>
  },
  {
    path: "/home",

    element: <PaginaHome/>
  },
  {
    path: "/ramal",
    element: <PaginaRamal/>
  }
],
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
