import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Switch, Redirect } from 'react-router-dom';
import LoginPage from './Log_in/login_page.js';  // Asegúrate de poner el nombre correcto
import Signinpage from './Sign_in/signin_page.js';  // Asegúrate de poner el nombre correcto 
import Recuperacion from './Recuperar_contraseña/Recuperacion.js';
import RecuperacionPage from './Recuperar_contraseña/Recuperacion_page.js';
import paginaprincipal_page from './pagina_principal/paginaprincipal.js';
import gamerHeavenImage from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/gamerheaven.png';
import pagina_principal from './pagina_principal/paginaprincipal.js';


function App() {
  const abrir_cerrar_menu = () =>{
    let menu_desplegable = document.getElementById("menu");
    let boton_cerrar = document.getElementById("x");
    menu_desplegable.classList.toggle("abrir_menu");
    boton_cerrar.classList.toggle("colocar_x");
    }


  return (
    
    <Router>
      <div className="App">
            <main>
          <Routes>
            <Route path="/" element={
              <div style={{textAlign:"center"}}>
                {/* Pantalla de inicio con enlaces a Login y Registro */}
                <img src={gamerHeavenImage} alt="Gamer heaven" className="Logo_home"/>

                <h1 style={{textAlign:"center"}}>Bienvenido a la aplicación</h1>
                <Link to="/login">Login</Link>
                <Link to="/signin">Registrarse</Link>
              </div>
            } />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signin" element={<Signinpage />} />
            <Route path="/Recuperacion" element={<RecuperacionPage/>} />
            {/* Agrega más rutas según sea necesario */}
          </Routes>
        </main>
      </div>

      <header>
      

    <nav id="menu" className="desplegable"></nav>
      
    </header>
    </Router>
    
  );
}
function Header() {
  return (
      <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
          Seguimiento Pacientes {""} 
          <span className="text-indigo-700">Veterinaria</span>
      </h1>
  )
}

export default App;  