import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Recuperacion.css';
import gamerHeavenImage from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/gamerheaven.png';

function Recuperacion() {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleRecoverPassword = (event) => {
    event.preventDefault();
    // Aquí manejarías la recuperación de contraseña, posiblemente enviando el email a tu backend
    console.log('Solicitud de recuperación de contraseña para:', email);
    // Muestra un mensaje al usuario o maneja la navegación según sea necesario
    alert("Si tenemos un usuario con ese correo, recibirás un enlace para recuperar tu contraseña.");
    navigate('/login'); // Opcional: Redirigir al usuario al login después de solicitar la recuperación
  };

  return (
    <div className="container">
      <div className="form-container3">
      <h2 className="Texto-password" >Restore password</h2>
      <form onSubmit={handleRecoverPassword}>
        <div className="test">
          <label htmlFor="email" className="Texto-mail">Email:</label>
          <input
            className="input-recuperar"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{display: 'block'}}
          />
          
        </div>
        <div>
          <button type="submit" className="boton-recuperar">Restore password</button>
        </div>
      </form>
      <div>
          <a href="/">
          <img src={gamerHeavenImage} alt="Gamer heaven" className="Logo"/>
          </a>
        </div>
        <div>
          <button onClick={() => navigate('/login')}className="boton-backtologin">Go back to login</button>
        </div>
    </div>
    </div>
    
  );
}

export default Recuperacion;