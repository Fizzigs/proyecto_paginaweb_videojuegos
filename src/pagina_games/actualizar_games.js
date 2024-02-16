  import React from 'react';
  import JuegosList from './games_lista';
  import { useState, useEffect } from 'react';
  import MenuBar from './menu_bar';
  import PaginaGames from './paginagames';
  import axios from 'axios';

  function ActualizarJuegos({ selectedFilter, setJuegos }) {
    useEffect(() => {
      const obtenerJuegosConFiltro = async () => {
        try {
          console.log('Selected Filter en ActualizarJuegos:', selectedFilter);
  
          let url = 'https://api.rawg.io/api/games?key=84dafbf2540d47389fc971ea576592fa';
  
          // Agregar lógica para construir la URL según el filtro seleccionado
          switch (selectedFilter) {
            case 'filtroTopPopular':
              // Reemplaza con la URL específica para filtroTopPopular
              url = 'URL específica para filtroTopPopular';
              break;
            case 'filtroLast30Days':
              // Reemplaza con la URL específica para filtroLast30Days
              url = 'URL específica para filtroLast30Days';
              break;
            case 'filtroPC':
              url = 'https://api.rawg.io/api/games?platforms=4&key=84dafbf2540d47389fc971ea576592fa';
              break;
            case 'filtroPS3':
              url = 'https://api.rawg.io/api/games?platforms=16&key=84dafbf2540d47389fc971ea576592fa';
              break;
            case 'filtroPS4':
              url = 'https://api.rawg.io/api/games?platforms=18&key=84dafbf2540d47389fc971ea576592fa';
              break;
            case 'filtroPS5':
              url = 'https://api.rawg.io/api/games?platforms=187&key=84dafbf2540d47389fc971ea576592fa';
              break;
            case 'filtroXboxOne':
              url = 'https://api.rawg.io/api/games?platforms=1&key=84dafbf2540d47389fc971ea576592fa';
              break;
            case 'filtroXboxSeries':
              url = 'https://api.rawg.io/api/games?platforms=186&key=84dafbf2540d47389fc971ea576592fa';
              break;
            case 'filtroSwitch':
              url = 'https://api.rawg.io/api/games?platforms=7&key=84dafbf2540d47389fc971ea576592fa';
              break;
            default:
              console.error('Filtro no reconocido:', selectedFilter);
              return;
          }
  
          // Realiza la llamada a la API con la URL construida
          const response = await axios.get(url);
          // console.log('API Response:', response.data);
  
          // Actualiza el estado de los juegos con la nueva lista obtenida
          setJuegos(response.data.results);
        } catch (error) {
          console.error('Error al obtener juegos con filtro:', error);
          // Puedes manejar el error de manera apropiada, por ejemplo, mostrando un mensaje al usuario
        }
      };
  
      // Llama a la función para obtener juegos con el filtro seleccionado
      obtenerJuegosConFiltro();
    }, [selectedFilter, setJuegos]);
  
    return ; // No necesitas renderizar nada aquí
  }
  
  export default ActualizarJuegos;