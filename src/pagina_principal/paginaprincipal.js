import userEvent from '@testing-library/user-event';
import './paginaprincipal.css';
import React, { useState } from 'react';
import gamerHeavenImage from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/gamerheaven.png';

function pagina_principal() {
  const abrir_cerrar_menu = () =>{
    let menu_desplegable = document.getElementById("menu");
    let boton_cerrar = document.getElementById("x");
    menu_desplegable.classList.toggle("abrir_menu");
    boton_cerrar.classList.toggle("colocar_x");
    }
  return (
    
    <header>
      <div>
        <button onClick ={abrir_cerrar_menu} className ="boton_menu" id= "x"></button> 
      </div>
    <nav id="menu" className="desplegable"></nav>
      <ul>
        <li><a href="/login.js">Perfil</a></li>
        <li><a href="/login.js">Logo</a></li>
      </ul>
    </header>
    );
};


export default pagina_principal;


