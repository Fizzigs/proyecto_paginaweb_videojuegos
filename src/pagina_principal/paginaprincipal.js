import userEvent from '@testing-library/user-event';
import './paginaprincipal.css';
import React, { useState } from 'react';
import gamerHeavenImage from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/gamerheaven.png';

function pagina_principal() {
  
  return (
      <header>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca de nosotros</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </header>
    );
};


export default pagina_principal;


