import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'

const RedirectComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redireciona automaticamente para '/home' após o componente ser montado
    navigate('/home');
  }, [navigate]);

  return <div>Redirecionando...</div>;
};
export default App
