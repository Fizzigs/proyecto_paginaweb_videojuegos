import React, { useState, useEffect , useRef} from 'react';
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
  const [selectedFilter, setSelectedFilter] = useState('Lista General');
  const [filter, setFilter] = useState('');
  const [customMessage, setCustomMessage] = useState('Lista General');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef();

  
  const getCustomMessage = (filterType) => {//Pasamos las variables dentro de filter las cuales definen las urls de cada filtro de la api
    switch (filterType) {
      case 'multiplayer':
        return 'Multi player Games';
      case 'singleplayer':
        return 'Single Player Games';
      case 'filtroPC':
        return 'Pc Games';
      case 'filtroPS3':
        return 'PS3 Games';
      case 'filtroPS4':
        return 'PS4 Games';
      case 'filtroPS5':
        return 'PS5 Games';
      case 'filtroXboxOne':
        return 'Xbox One Games';
      case 'filtroXboxSeries':
        return 'Xbox Series Games';
      case 'filtroSwitch':
        return 'Nintendo Switch Games';
      default:
        return 'Lista General';
    }
  };

  const fetchJuegos = async (pageNumber = 1, currentFilter = filter) => {
    try {
      setLoading(true);
  
     //Urls para especificar los filtros al hacer expanded games
      const filterUrls = {
        'Lista General': 'https://api.rawg.io/api/games?key=ea831dc60aaa403d9c2893fbcd9980d2',
        'multiplayer': 'https://api.rawg.io/api/games?tags=7&key=ea831dc60aaa403d9c2893fbcd9980d2',
        'singleplayer': 'https://api.rawg.io/api/games?tags=31&key=ea831dc60aaa403d9c2893fbcd9980d2',
        'filtroPC': 'https://api.rawg.io/api/games?platforms=4&key=ea831dc60aaa403d9c2893fbcd9980d2',
        'filtroPS3': 'https://api.rawg.io/api/games?platforms=16&key=ea831dc60aaa403d9c2893fbcd9980d2',
        'filtroPS4':'https://api.rawg.io/api/games?platforms=18&key=ea831dc60aaa403d9c2893fbcd9980d2',
        'filtroPS5':'https://api.rawg.io/api/games?platforms=187&key=ea831dc60aaa403d9c2893fbcd9980d2',
        'filtroXboxOne':'https://api.rawg.io/api/games?platforms=1&key=ea831dc60aaa403d9c2893fbcd9980d2',
        'filtroXboxSeries':'https://api.rawg.io/api/games?platforms=186&key=ea831dc60aaa403d9c2893fbcd9980d2',
        'filtroSwitch': 'https://api.rawg.io/api/games?platforms=7&key=ea831dc60aaa403d9c2893fbcd9980d2',
      };
  
      const url = filterUrls[currentFilter] || filterUrls['Lista General']; // Default to 'Lista General' if filter not found
  
      const response = await axios.get(`${url}&page=${pageNumber}&page_size=20`);//Definimos la cantidad de juegos por pagina
  
      if (pageNumber === 1) {
        setJuegos(response.data.results);
      } else {
        // Filtrar juegos repetidos
        setJuegos((prevJuegos) => {
          const uniqueGames = prevJuegos.concat(response.data.results).reduce((acc, game) => {
            const existingGame = acc.find((prevGame) => prevGame.id === game.id);
            if (!existingGame) {
              acc.push(game);
            }
            return acc;
          }, []);
          return uniqueGames;
        });
      }
  
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCustomMessage(getCustomMessage(newFilter));
    setPage(1);
    // Llama a fetchJuegos después de actualizar el filtro y la página
    fetchJuegos(1, newFilter);
  };
  
  const handleLoadMore = async () => {
    console.log('Before loading more games...');
    console.log('Current page:', page);
    console.log('Current filter:', filter);
  
    await fetchJuegos(page + 1, filter); // Incrementa la página antes de llamar a fetchJuegos
  
    console.log('After loading more games...');
    console.log('Updated page:', page + 1); // Actualiza la página después de la solicitud
    console.log('Updated filter:', filter);
  }; 
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      fetchJuegos(); 
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const handleScroll = () => {//Propiedad scroll del menubar
      const container = containerRef.current;
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);

      if (container) {
        const { scrollTop, scrollHeight, clientHeight } = container;
        if (scrollTop + clientHeight >= scrollHeight - 100 && !loading) {
          fetchJuegos(page, filter);
        }
      }
    };

 
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
          resetGameList={handleFilterChange} // Pasa la función al componente MenuBar
        />
        <ActualizarJuegos selectedFilter={filter} setJuegos={setJuegos} />
        <div className="contenido-container">
          <div className="lista-juegos">
            <div className="juegos-container">
              <h2 className="texto_lista_games">{`Games List ${selectedFilter !== 'Lista General' ? `- ${selectedFilter}` : ''}`}</h2>
              <h2 className="texto_lista_games">{customMessage}</h2>
            </div>
            <JuegosList juegos={juegos} selectedFilter={selectedFilter} />
            {loading && <p>Loading games...</p>}
            <button onClick={handleLoadMore} className="load-more-button">Load More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaGames; 