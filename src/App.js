import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './Log_in/login_page.js';  // Asegúrate de poner el nombre correcto
import Signinpage from './Sign_in/signin_page.js';  // Asegúrate de poner el nombre correcto 
import Recuperacion from './Recuperar_contraseña/Recuperacion.js';
import RecuperacionPage from './Recuperar_contraseña/Recuperacion_page.js';
import paginaprincipal_page from './pagina_principal/paginaprincipal.js';
import gamerHeavenImage from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/gamerheaven.png';


function App() {
  return (
    
    <Router>
      <div >
          <img src={gamerHeavenImage} alt="Gamer heaven" className="Logo"/>
        </div>

      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={
              <div>
                {/* Pantalla de inicio con enlaces a Login y Registro */}
                <h1>Bienvenido a la aplicación</h1>
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
    </Router>
  );
}

export default App;