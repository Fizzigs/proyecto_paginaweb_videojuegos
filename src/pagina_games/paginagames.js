import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../header_page_games';
import './paginagames.css';
import ps4Icon from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/ps4icon.png';
import xboxIcon from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/ps4icon.png';
import nintendoswitchIcon from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/nintendoswitchicon.png';
import windowsIcon from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/windowsicon.png';
import calendarIcon from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/calendaricon.png';



const PaginaGames = () => {
  const [juegos, setJuegos] = useState([]);
  const [plataformas, setPlataformas] = useState([]);
  const [error, setError] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  
  const fetchJuegos = async () => {
    try {
      const response = await axios.get('https://api.rawg.io/api/games', {
        params: {
          key: 'a2a12ad6958442a49222489fa57fe7c8',
          page_size: 150,
        },
      });
      

      setJuegos(response.data.results);
    } catch (error) {
      console.error('Hubo un error al obtener los datos de juegos:', error);
      setError('Hubo un error al obtener los datos de juegos');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const juegosResponse = await axios.get('https://api.rawg.io/api/games', {
          params: {
            key: 'a2a12ad6958442a49222489fa57fe7c8',
            page_size: 150,
          },    
        });

        const plataformasResponse = await axios.get('https://api.rawg.io/api/platforms', {
          params: {
            key: 'a2a12ad6958442a49222489fa57fe7c8',
          },
        });

        setJuegos(juegosResponse.data.results);
        setPlataformas(plataformasResponse.data.results);

      } catch (error) {
        console.error('Hubo un error al obtener los datos:', error);
        setError('Hubo un error al obtener los datos');
      }
    };

    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    fetchData();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (error) return <div>{error}</div>;
  const handleFilter = (filterType) => {
     if (showMenu === 'release') {
      console.log(`Filtrar por Release: ${filterType}`);
      // Realiza las operaciones específicas para Release
    } else if (showMenu === 'platform') {
      console.log(`Filtrar por Platform: ${filterType}`);
      // Realiza las operaciones específicas para Platform
    }
  };

  
  const expandedReleased = (dato) => {
    setShowMenu(!dato);
      }

  const expandedPlatforms = (dato) => {
    setShowMenu2(!dato);
  }


  return (
    <div className={`pagina-container ${scrolled ? 'menu-bar-scrolled' : ''}`}>      
      <Header />
      <h1 className="titulo_pagina">Página de Juegos</h1>
      
      {/* Div general que contiene el menú lateral y la lista de juegos */}
      <div className="main-container">

        <MenuBar showMenu={showMenu} showMenu2={showMenu2} expandedReleased={expandedReleased} expandedPlatforms={expandedPlatforms} handleFilter={handleFilter} scrolled={scrolled}/>
        <div className="contenido-container">

        <div className="lista-juegos">
          <h2 className="texto_login">Lista de Juegos</h2>

          <JuegosList juegos={juegos} />
          
        </div>
        </div>
      </div>
    </div>
  );
};


const MenuBar = ({ showMenu, showMenu2,  handleFilter, expandedReleased, expandedPlatforms, scrolled}) => (
  <div className={`menu-bar ${scrolled ? 'menu-bar-scroll' : ''}`}>
  <div className="menu-section" >
       <button onClick={() => expandedReleased(showMenu)}>☰ Release</button>
      <div className={`dropdown-content ${showMenu === true ? 'show' : 'hidden'}`}>
        <button onClick={() => handleFilter('shooter')}>Top popular</button>
        <button onClick={() => handleFilter('aventura')}>Last 30 days</button>
      </div>
    </div>
    
    <div className="menu-section">
      <button onClick={() => expandedPlatforms(showMenu2)}>☰ Platform</button>
      <div className={`dropdown-content ${showMenu2 === true ? 'show' : 'hidden'}`}>
        <button onClick={() => handleFilter('pc')}>PC</button>
        <button onClick={() => handleFilter('ps4')}>PS4</button>
        <button onClick={() => handleFilter('xbox')}>Xbox</button>
        <button onClick={() => handleFilter('switch')}>Switch</button>
      </div>
    </div>
  </div>
);

const JuegosList = ({ juegos }) => {
  const [plataformas, setPlataformas] = useState({});

  const getPlataformaImage = (plataformaNombre) => {
    // Aquí puedes mapear los nombres de las plataformas a las rutas de las imágenes
    const plataformaImages = {
      pc: require('../img/windowsicon.png'),  // Rutas relativas en el proyecto React
      ps4: require('../img/ps4icon.png'),
      xbox: require('../img/xboxicon.png'),
      switch: require('../img/nintendoswitchicon.png'),
      // Agrega más plataformas según sea necesario
    };

    return plataformaImages[plataformaNombre] || '../img/ gamerheaven.png';
  };
  
  const fetchPlataformas = async (juegoId) => {
    try {
      const { data } = await axios.get(`https://api.rawg.io/api/games/${juegoId}/platforms?key=a2a12ad6958442a49222489fa57fe7c8`);
      return data.results;
    } catch (error) {
      console.error('Hubo un error al obtener los detalles de las plataformas:', error);
      return [];
    }
  };

  useEffect(() => {
    const fetchPlataformasForJuego = async (juegoId) => {
      const platforms = await fetchPlataformas(juegoId);
      setPlataformas((prevPlataformas) => ({
        ...prevPlataformas,
        [juegoId]: platforms,
      }));
    };

    juegos.forEach((juego) => {
      fetchPlataformasForJuego(juego.id);
    });
  }, [juegos]);

  return (
    <div className="juegos-container">
      {juegos.length > 0 ? (
        juegos.map((juego) => (
          <div key={juego.id} className="juego-bloque">
            <h2>{juego.name}</h2>
            <img src={juego.background_image} alt={juego.name} style={{ width: '300px', height: '200px' }} className="juego-imagen" />
            <p>Fecha de lanzamiento: {juego.released}</p>
            <p>Calificación: {juego.rating}</p>
            <p>Metacritic: {juego.metacritic}</p>
            <p>Géneros: {juego.genres.map((g) => g.name).join(', ')}</p>
            <p>Plataformas: {plataformas[juego.id]?.map((p) => p.name).join(', ')}</p>
          </div>
        ))
      ) : (
        <p>Cargando juegos...</p>
      )}
    </div>
  );
};

export default PaginaGames;