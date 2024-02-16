import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Switch, Redirect } from 'react-router-dom';
import LoginPage from './Log_in/login_page.js';  // Asegúrate de poner el nombre correcto
import Signinpage from './Sign_in/signin_page.js';  // Asegúrate de poner el nombre correcto 
import Recuperacion from './Recuperar_contraseña/Recuperacion.js';
import RecuperacionPage from './Recuperar_contraseña/Recuperacion_page.js';
import PaginagamesPage from './pagina_games/paginagamespage.js';
import PaginaGames from './pagina_games/paginagames.js';
import gamerHeavenImage from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/gamerheaven.png';
import usuariopredeterminadoImage from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/usuariopredeterminado.png';
import fondo1Image from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/fondo1.png';
import fondo2Image from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/fondo2.png';
import fondo3Image from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/fondo3.png';
import { useState } from 'react';
import ReactModal from 'react-modal';

const Header = () => {
  const [selectedImage, setSelectedImage] = useState(usuariopredeterminadoImage);
  const [showChangeButton, setShowChangeButton] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        //Actualiza la imagen seleccionada con la imagen cargada por el usuario
        setSelectedImage(e.target.result);
        setShowChangeButton(true);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleFileInputChange = (event) => {
    console.log('Cambio de archivo iniciado');
    const file = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = (e) => {
        console.log('Imagen cargada:', e.target.result);
        setSelectedImage(e.target.result);
        setShowChangeButton(true);
        setIsModalOpen(false);
      };
  
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const imageContainerStyle = {
    width: '110px',
    height: '110px',
    overflow: 'hidden', //Oculta cualquier parte de la imagen que exceda el contenedor
  };
  
  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', //Ajusta la imagen para cubrir completamente el contenedor
  };

  return (
    <div style={headerStyle}>
      <div style={elementStyle}>
          <a href="/">
          <img src={gamerHeavenImage} alt="Gamer heaven" className="Logo_home"/>
          </a>
        </div>
      
      <div style={elementStyle}>
        <h1 className="text_bienvenidos">WELCOME!</h1>
      </div>

      <div style={elementStylelogin}>
        <Link to="/signin" style={linkStyle}>
          <div style={buttonStyle}>Sign in</div>
        </Link>
        <div style={imageContainerStyle} onClick={handleImageClick}>
          <img src={selectedImage} alt="Imagen seleccionada" style={imageStyle} className="imagen_seleccionada" />
          <div style={elementStyle}>

        <ReactModal 
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Cambiar Foto de Perfil">
          <div className="modalstyle">
          <h2 className='texto-modal'>Change profile photo</h2>
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none'}}
            onChange={handleFileInputChange}
            accept="image/*"
          />
          <label htmlFor="fileInput"className='texto-modal2'>Select Image</label>
          <button onClick={handleCloseModal} className='texto-modal2'>Cancel</button>
          <h2>Language</h2>
          <h2>DarkTheme on or of</h2>
          <h2>Sign off</h2>
          </div>
        </ReactModal>
      </div> 
 
    </div>
      </div>
      {/* Input de tipo file oculto para seleccionar imágenes */}
      <input
        type="file"
        id="fileInput"
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
        accept="image/*"
      />
    </div>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const elementStylelogin={
  flex: '0.9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
}

const elementStyle = {
  flex: '1',
  alignItems: 'center',
  justifyContent: 'space-evenly',
};

const linkStyle = {
  textDecoration: 'none',
  cursor: 'pointer',
  fontFamily: 'PressStart2P',
  
};

const buttonStyle = {
  padding: '8px 12px',
  borderRadius: '5px',
  backgroundColor: '#FFFFFF',
  color: 'black',
  cursor: 'pointer',
};
const MainPage = () => {
  
  const imageContainerStyle = {
    position: 'relative',
    height:'21.6vh',
    
  };
  const textOverlayStyle = {
    position: 'absolute',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '4em',
    fontFamily: 'PressStart2P',

  };

  return (
    <div>
      <div style={imageContainerStyle}>
        <img src={fondo1Image} alt="Gamer heaven" className='imageneshome' />
        <h1 style={textOverlayStyle}>
          <a href="/paginagames" class="underline-link" className="clickable-text">GAMES</a>
        </h1>
      </div>
      <div style={imageContainerStyle}>
        <img src={fondo2Image} alt="Gamer heaven" className='imageneshome' />
        <h1 style={textOverlayStyle}>
        <a href="/login" class="underline-link" className="clickable-text">NEWS</a></h1>
      </div>
      <div style={imageContainerStyle}>
        <img src={fondo3Image} alt="Gamer heaven" className='imageneshome' />
        <h1 style={textOverlayStyle}>
        <a href="/login" class="underline-link" className="clickable-text">IA</a></h1>
      </div>  
    </div>
  );
};


function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Header/>
                  <MainPage/>
                </div>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signin" element={<Signinpage />} />
            <Route path="/Recuperacion" element={<RecuperacionPage />} />
            <Route path="/paginagames" element={<PaginagamesPage/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;