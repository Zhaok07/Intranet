import React, { forwardRef } from 'react';
import './GerenciaAdministrativa.css'

// Usamos forwardRef para permitir que o componente tenha a referência passada
const GerenciaAdministrativa = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="Administracao">
     <span id='Administracao'>GERÊNCIA - ADMINISTRATIVA</span>
        <div className='ramal'>
          Ramal: Grazi - 189
            <div className='email'>
                Email: grazielaambros@fubog.org
            </div>
        </div>
    </div>
  );
});
export default GerenciaAdministrativa