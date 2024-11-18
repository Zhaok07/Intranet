import React, { useState, useEffect, useRef } from 'react';  // Importando useEffect e useRef
import './Dropdown.css'
import { FiMenu } from "react-icons/fi";
import LinkPop from '../POP/LinkPop';
import LinkHome from '../Home/LinkHome';
import LinkRamal from '../Ramal/LinkRamal';

function Dropdown() {
  // Estado para controlar se a dropdown está aberta ou fechada
  const [isOpen, setIsOpen] = useState(false);

  // Ref para o elemento dropdown
  const dropdownRef = useRef(null);

  // Função para alternar o estado da dropdown (abrir/fechar)
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Função para detectar cliques fora do dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false); // Fecha o dropdown
    }
  };

  // Adiciona o listener de evento para clicar fora do dropdown
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    // Limpa o listener quando o componente for desmontado
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      {/* Botão que alterna o estado da dropdown */}
      <button onClick={toggleDropdown} className="dropdown-button">
        <FiMenu className='IconeMenu'/>
      </button>

      {/* Se isOpen for verdadeiro, exibe as opções */}
      {isOpen && (
        <ul className="dropdown-menu">
          <li className="dropdown-item"><LinkPop /></li>
          <li className="dropdown-item"><LinkHome /></li>
          <li className="dropdown-item"><LinkRamal /></li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
