// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getAuth, signOut  } from 'firebase/auth';

// function Logout() {
//     const navigate = useNavigate();
//     const auth = getAuth();

//     const handleLogout = async () => {
//         try {
//             await signOut(auth);
//             navigate('/'); // Redirige al usuario a la página de inicio de sesión después del logout
//         } catch (error) {
//             console.error('Error al cerrar la sesión:', error);
//         }
//     };

//     return (
//         <button onClick={handleLogout}>Cerrar Sesión</button>
//     );
// }

// export default Logout;