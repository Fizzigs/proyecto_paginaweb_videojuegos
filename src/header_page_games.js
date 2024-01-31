import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Switch, Redirect } from 'react-router-dom';
import gamerHeavenImage from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/gamerheaven.png';
import usuariopredeterminadoImage from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/usuariopredeterminado.png';
import fondo1Image from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/fondo1.png';

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
    height: '100px',
    overflow: 'hidden', //Oculta cualquier parte de la imagen que exceda el contenedor
  };
  
  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', //Ajusta la imagen para cubrir completamente el contenedor
  };

  return (
    // <div style={headerStyle}>
    <div style={{ ...headerStyle, backgroundImage: `url(${fondo1Image})` }}>

      
      <div style={elementStyle}>
          <a href="/">
          <img src={gamerHeavenImage} alt="Gamer heaven" className="Logo_home"/>
          </a>
        </div>
        
      <div style={elementStyle}>
        <h1 className="text_games">GAMES</h1>
        
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
        <h2>Change profile photo</h2>
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none'}}
          onChange={handleFileInputChange}
          accept="image/*"
        />
        <label htmlFor="fileInput">Select Image</label>
        <button onClick = {handleCloseModal} >Cancel</button>
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
  backgroundPosition: 'center center',  // Puedes ajustar estas coordenadas según tus necesidades
  backgroundImage: "url(C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/fondo1.png)",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',  // Ajusta según tus necesidades, por ejemplo, 'contain'
  height:'230px'
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

export default Header;