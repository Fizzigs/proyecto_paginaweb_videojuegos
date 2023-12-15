import userEvent from '@testing-library/user-event';
import './login.css';
import React, { useState } from 'react';
import gamerHeavenImage from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/gamerheaven.png';
import Recuperacion from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/Recuperar_contraseña/Recuperacion.js';


function Login({onLogin}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRecovery, setShowRecovery] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === 'email' && password === 'contraseña') {
      onLogin(true);  
    } else {
      onLogin(false);
    }
  };

  const handleRecovery = () => {
    setShowRecovery(true);
  };

  if (showRecovery) {
    return <Recuperacion />;
  }

  return (
    <div className ="form-container1">
       <form onSubmit={handleSubmit} className="login-form"></form>
      <h1 className ="Texto_Titulo">LOG IN</h1>
      <form>
      <h1 className="Texto_login" htmlFor="mail">Email adress</h1>
        <input className="input-field"
          type="Email"
          
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        

        <h1 className="Texto_login" htmlFor="mail" >Password</h1>
        <input className= "input-field"
          type="Password"
          
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
       <p>
          <a href="/signin">Not registered?</a>
        </p>
        <p>
          <a href="/Recuperacion">Forgotten password?</a>
        </p>
        

        <div>
          <img src={gamerHeavenImage} alt="Gamer heaven" className="Logo"/>
        </div>
        
        <button type="submit" className="login-button">LOG IN</button>
      </form>
    </div>
  );
}

export default Login;


