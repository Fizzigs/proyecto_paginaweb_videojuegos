        import React, { useState, useEffect } from 'react';
        import axios from 'axios';
        import './paginagames.css';
        import ActualizarJuegos from './actualizar_games';
        import MenuBar from './menu_bar';
        import ps3Icon from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/ps3icon.png';
        import ps4Icon from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/ps4icon.png';
        import ps5Icon from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/ps5icon.png';
        import xboxIcon from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/xboxicon.png';
        import xboxseriesIcon from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/xboxseriesIcon.png';
        import nintendoswitchIcon from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/nintendoswitchicon.png';
        import windowsIcon from 'C:/Users/Joan Atrio/proyecto_paginaweb_videojuegos/src/img/windowsicon.png';
        import './game_card.css';

        const mapPlatformToIcon = (platformId) => {
          // console.log('Platform ID:', platformId);
        
          const excludedPlatforms = [5, 6, 3, 19, 17, 80, 14]; // IDs de plataformas excluidas
        
          // Verificar si la plataforma está excluida
          if (excludedPlatforms.includes(platformId)) {
            // console.log('Excluded platform:', platformId);
            return null; // No agregar la plataforma excluida
          }
        
          const platformIcons = {
            187: ps5Icon, // PS5
            186: xboxseriesIcon, // Xbox Series
            18: ps4Icon, // PS4
            16: ps3Icon, // PS3
            1: xboxIcon, // Xbox One
            7: nintendoswitchIcon, // Nintendo Switch
            4: windowsIcon, // PC
          };
        
          return platformIcons[platformId];
        };
        
        const JuegosList = ({ juegos, selectedPlatform}) => {
          const [plataformas, setPlataformas] = useState({});
          const [loading, setLoading] = useState(true);
          
        
          const getPlataformas = async (juegoId) => {
            try {
              const { data } = await axios.get(`https://api.rawg.io/api/games/${juegoId}/platforms?key=4fe41649661c49c4a0d54af2a016f7de`);
              return data.results;
            } catch (error) {
              console.error('Hubo un error al obtener los detalles de las plataformas:', error);
              return [];
            }
          };
        
          useEffect(() => {
            const fetchPlataformasForJuego = async (juegoId) => {
              if (!plataformas[juegoId]) {
                try {
                  const platforms = await getPlataformas(juegoId);
                  setPlataformas((prevPlataformas) => ({
                    ...prevPlataformas,
                    [juegoId]: platforms,
                  }));

                } catch (error) {
                  console.error('Hubo un error al obtener los detalles de las plataformas:', error);
                }
              }
            };
        
            // Llamamos a fetchPlataformasForJuego para cada juego
            juegos.forEach((juego) => {
              fetchPlataformasForJuego(juego.id);
            });
        
            setLoading(false); // Indicamos que la carga inicial ha finalizado
          }, [juegos, plataformas]);
        
          const filteredJuegos = selectedPlatform
            ? juegos.filter((juego) => {
                return juego.platforms.some((plataforma) => plataforma.platform.id === selectedPlatform);
              })
            : juegos;
            
            return (
              <div>
                {loading ? (
                  <p>Loading games...</p>
                ) : (
                  <div className="juegos-container">
                    {filteredJuegos.length > 0 ? (
                      filteredJuegos.map((juego) => (
                        <div key={juego.id} className="juego-bloque">
                          <img src={juego.background_image} alt={juego.name} className="juego-imagen" />
                          <div className="game-card">
                            <div className="game-card-info">
                              <h3 className="game-card-title">{juego.name}</h3>
                              <p className="game-card-platforms">
                                Platforms:
                                <ul className="plataforma-estructura-bloque">
                                  {juego.platforms
                                    .map((plataforma) => {
                                      const platformIcon = mapPlatformToIcon(plataforma.platform.id);
                                      return platformIcon ? (
                                        <li key={plataforma.platform.id} className="plataforma-estructura">
                                          <img
                                            src={platformIcon}
                                            alt={plataforma.platform.name}
                                            className="plataforma-icon"
                                            title={plataforma.platform.name}
                                          />
                                        </li>
                                      ) : null;
                                    })
                                    .filter((platform) => platform !== null)}
                                </ul>
                              </p>
                              <p className="game-card-genres">
                                <ul className="generos-titulo">Genres:</ul>
                                {juego.genres.map((g) => g.name).join(' ')}
                              </p>
                              <p className="game-card-modes">
                              <ul className="modos-titulo">Modes:</ul>
                              {juego.tags
                                .filter((tag) => tag.id === 31 || tag.id === 7) // Filtra solo Singleplayer (31) y Multiplayer (7)
                                .map((mode) => mode.name)
                                .join(' ')}
                            </p>
                              <div className={`game-card-rating ${juego.metacritic >= 90 ? 'green' : juego.metacritic >= 60 ? 'yellow' : 'red'}`}>
                                {juego.metacritic}
                              </div>
                              <p className="release-card">{juego.released}</p>
                              {/* <a href="#play" className="game-card-action">
                                Trailer
                              </a> */}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>Loading games...{selectedPlatform ? ' for the selected platform' : ''}.</p>
                    )}
                  </div>
                )}
              </div>
            );
          };
        
        export default JuegosList;
