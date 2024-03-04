import userEvent from '@testing-library/user-event';
import './signin.css';
import React, { useState } from 'react';
import gamerHeavenImage from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/gamerheaven.png';
import { auth } from '../firebase';
import { useNavigate} from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Signin() { 
  const [Username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirigir a la página de tareas después del registro
      alert("Sign Up Succesfull");
      window.location.href = '/login'; // Cambia la ubicación actual del navegador


      navigate('/');
    } catch (error) {
      console.error("Error al crear la cuenta: ", error.message);
      // Aquí puedes manejar el error, como mostrar un mensaje al usuario
      alert("Sign in Failed");

    }
  };

  return (
    <div className="container">
      <div className="form-container2"> {}
      <h1 className="Texto_Titulo2">Sign Up</h1> {}
      <form onSubmit={handleSubmit}>

      <h1 class="Texto_signin">Email adress</h1>
        <input class="input-field"
          type="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <h1 className="Texto_signin">Username</h1> {}
        <input className="input-field"
          type="text" 
          value={Username} 
          onChange={(e) => setUsername(e.target.value)}
        />

        <h1 className="Texto_signin">Password</h1>
        <input className="input-field"
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <p>
          <a href="/login">Already registered?</a>
        </p>

        <div>
          <a href="/">
          <img src={gamerHeavenImage} alt="Gamer heaven" className="Logo"/>
          </a>
        </div>

        <button type="submit"className="signin-button">Sign Up</button> 
      </form>
      </div>
    </div>
  );
}

export default Signin;