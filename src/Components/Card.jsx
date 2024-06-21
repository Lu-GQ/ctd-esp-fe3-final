import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {

  const addFav = () => {
    const favDentists = JSON.parse(localStorage.getItem('favs')) || [];
    const newFav = { name, username, id };

    // Evitar duplicados
    if (!favDentists.some(dentist => dentist.id === id)) {
      favDentists.push(newFav);
      localStorage.setItem('favs', JSON.stringify(favDentists));
    }
  }

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <h3>{name}</h3>
      <p>{username}</p>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link to={`/dentist/${id}`}>
        <button className="detailButton">Ver Detalles</button>
      </Link>

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">Agregar a Favoritos</button>
    </div>
  );
};

export default Card;



