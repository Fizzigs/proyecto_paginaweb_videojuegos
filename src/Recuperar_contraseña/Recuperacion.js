// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Recuperacion.css';
// import gamerHeavenImage from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/gamerheaven.png';

// function Recuperacion() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');

//   const handleRecoverPassword = async (event) => {
//     event.preventDefault();

//     try {
//       // Enviar la solicitud al backend para manejar la recuperación de contraseña
//       const response = await fetch('URL_DEL_BACKEND/recuperar-contrasena', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();

//       // Verificar si la recuperación fue exitosa
//       if (response.ok) {
//         alert('Si tenemos un usuario con ese correo, recibirás un enlace para recuperar tu contraseña.');
//         navigate('/login');
//       } else {
//         // Manejar el caso en el que la recuperación falla
//         alert(`Error: ${data.message}`);
//       }
//     } catch (error) {
//       console.error('Error al recuperar contraseña:', error);
//     }
//   };
//   return (
//     <div className="container">
//       <div className="form-container3">
//       <h2 className="Texto-password" >Restore password</h2>
//       <form onSubmit={handleRecoverPassword}>
//         <div className="test">
//           <label htmlFor="email" className="Texto-mail">Email:</label>
//           <input
//             className="input-recuperar"
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{display: 'block'}}
//           />
          
//         </div>
//         <div>
//           <button type="submit" className="boton-recuperar">Restore password</button>
//         </div>
//       </form>
//       <div>
//           <a href="/">
//           <img src={gamerHeavenImage} alt="Gamer heaven" className="Logo"/>
//           </a>
//         </div>
//         <div>
//           <button onClick={() => navigate('/login')}className="boton-backtologin">Go back to login</button>
//         </div>
//     </div>
//     </div>
    
//   );
// }

// export default Recuperacion;