import userEvent from '@testing-library/user-event';
import './login.css';
import React, { useState, useContext } from 'react';
import gamerHeavenImage from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/gamerheaven.png';
import { useNavigate } from 'react-router-dom';
import { getAuth , signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Usuario autenticado con éxito
      console.log("Usuario logueado:", userCredential.user);
      console.log("Correo electrónico del usuario:", userCredential.user.email);

      // Almacenar el correo electrónico en localStorage
      localStorage.setItem('userEmail', userCredential.user.email);

      // Aquí puedes redirigir al usuario o manejar el estado de autenticación como prefieras
      alert("Logged Succesfull");
      navigate('/');

    } catch (error) {
      console.error("Error en el inicio de sesión:", error.message);
      alert("Logged Failed");
      // Manejo de errores, por ejemplo, mostrar un mensaje de error al usuario
    }
  };

  return (
    <div className="container">
      
      <div className ="form-container1">
      <form onSubmit={handleSubmit} className="login-form">
      <h1 className ="Texto_Titulo">LOG IN</h1>
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

        {/* <p>
          <a href="/Recuperacion">Forgotten password?</a>
        </p> */}

        <div>
          <a href="/">
          <img src={gamerHeavenImage} alt="Gamer heaven" className="Logo"/>
          </a>
        </div> 
        <button type="submit" className="login-button">LOG IN</button>
        </form>
      </div>
      
    </div>
    
  );
}

export default Login;


