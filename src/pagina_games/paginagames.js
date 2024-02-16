import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../header_page_games';
import './paginagames.css';
import JuegosList from './games_lista';
import MenuBar from './menu_bar';
import ActualizarJuegos from './actualizar_games';


const PaginaGames = () => {
  const [juegos, setJuegos] = useState([]);
  const [error, setError] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('null');
  const [filter, setFilter] = useState('');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    // console.log(newFilter)
  };
  
  const fetchJuegos = async () => {
    try {
      const response = await axios.get('https://api.rawg.io/api/games?key=84dafbf2540d47389fc971ea576592fa', {
        params: {
          key: '84dafbf2540d47389fc971ea576592fa',
          page_size: 250,
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
        const juegosResponse = await axios.get('https://api.rawg.io/api/games?key=84dafbf2540d47389fc971ea576592fa', {
          params: {
            key: '84dafbf2540d47389fc971ea576592fa',
            page_size: 250,
          },    
        });
        

        // const plataformasResponse = await axios.get('https://api.rawg.io/api/platforms?key=a2a12ad6958442a49222489fa57fe7c8', {
        //   params: {
        //     key: 'a2a12ad6958442a49222489fa57fe7c8',
        //   },
        // });

        setJuegos(juegosResponse.data.results);

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
      <h1 className="titulo_pagina">Games Page</h1>
      <div className="main-container">
      <MenuBar
          showMenu={showMenu}
          showMenu2={showMenu2}
          expandedReleased={() => setShowMenu(!showMenu)}
          expandedPlatforms={() => setShowMenu2(!showMenu2)}
          scrolled={scrolled}
          handleFilterChange={handleFilterChange}
        />
        <ActualizarJuegos selectedFilter={filter} setJuegos={setJuegos} />
        <div className="contenido-container">
          <div className="lista-juegos">
            <h2 className="texto_login">Games List</h2>
            <JuegosList juegos={juegos} selectedFilter={selectedFilter} />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};


export default PaginaGames;