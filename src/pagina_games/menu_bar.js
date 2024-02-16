import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './paginagames.css';
import ActualizarJuegos from './actualizar_games';

const MenuBar = ({ showMenu, showMenu2, handleFilterChange, expandedReleased, expandedPlatforms, scrolled, filtroTopPopular, filtroLast30Days, filtroPC, filtroPS3, filtroPS4, filtroPS5, filtroXboxOne, filtroXboxSeries, filtroSwitch, setSelectedFilter }) => {
   
  return (
    <div className={`menu-bar ${scrolled ? 'menu-bar-scroll' : ''}`}>
      <div className="menu-section">
        <button onClick={() => expandedReleased(showMenu)}>☰ Release</button>
        <div className={`dropdown-content ${showMenu === true ? 'show' : 'hidden'}`}>
          <button onClick={() => handleFilterChange(filtroTopPopular)}>Top popular</button>
          <button onClick={() => handleFilterChange(filtroLast30Days)}>Last 30 days</button>
        </div>
      </div>

      <div className="menu-section">
        <button onClick={() => expandedPlatforms(showMenu2)}>☰ Platform</button>
        <div className={`dropdown-content ${showMenu2 === true ? 'show' : 'hidden'}`}>
          <button onClick={() => handleFilterChange('filtroPC')}>PC</button>
          <button onClick={() => handleFilterChange('filtroPS3')}>PS3</button>
          <button onClick={() => handleFilterChange('filtroPS4')}>PS4</button>
          <button onClick={() => handleFilterChange('filtroPS5')}>PS5</button>
          <button onClick={() => handleFilterChange('filtroXboxOne')}>Xbox One</button>
          <button onClick={() => handleFilterChange('filtroXboxSeries')}>Xbox Series</button>
          <button onClick={() => handleFilterChange('filtroSwitch')}>Nintendo Switch</button>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
