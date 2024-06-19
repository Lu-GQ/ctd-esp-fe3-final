import React, { useContext } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { GlobalContext } from './utils/GlobalContext';

const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
  <BrowserRouter>
    <nav className={`navbar ${state.theme}`}>
      {/* Aquí se agregan los links correspondientes a las rutas definidas */}
      <ul className="navbar-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/favs">Favoritos</Link>
        </li>
      </ul>
      {/* Implementación de la lógica para cambiar de tema con el botón */}
      <button onClick={toggleTheme} className="theme-button">
        {state.theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
      </button>
    </nav>
    </BrowserRouter>
  );
};

export default Navbar;
