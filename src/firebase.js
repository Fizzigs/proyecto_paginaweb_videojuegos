import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPQUJgssL9QO4A0hxEW_Qf3vv7Cbpz3J4",
    authDomain: "proyecto-paginaweb-videojuegos.firebaseapp.com",
    projectId: "proyecto-paginaweb-videojuegos",
    storageBucket: "proyecto-paginaweb-videojuegos.appspot.com",
    messagingSenderId: "1040415418895",
    appId: "1:1040415418895:web:f683191330ad5c1caf517a",
    measurementId: "G-3H9TG8B6G8"
  };

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta 'auth' y 'firestore'
export const auth = getAuth(app);
export const firestore = getFirestore(app);