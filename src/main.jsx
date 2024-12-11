import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import PaginaHome from './Home/PaginaHome.jsx';
import PaginaPop from './POP/PaginaPop.jsx';
import PaginaRamal from './Ramal/PaginaRamal.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<PaginaHome />} />
        <Route path="/pop" element={<PaginaPop />} />
        <Route path="/ramal" element={<PaginaRamal />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
