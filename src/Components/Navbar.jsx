import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./utils/GlobalContext";

const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav className={`navbar ${state.theme}`}>
      {/* Aquí se agregan los links correspondientes a las rutas definidas */}
      <div className="navbar-left">
        DH Odonto
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/favs">Favs</Link>
          </li>
        </ul>
        {/* Implementación de la lógica para cambiar de tema con el botón */}
        <button onClick={toggleTheme} className="theme-button">
          {state.theme === "light" ? '🌞' : '🌜'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
