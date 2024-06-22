import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./utils/GlobalContext";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(GlobalContext);
  const addFav = () => {
    var favDentists = JSON.parse(localStorage.getItem('favs')) || [];
    const newFav = { name, username, id };

    // Evitar duplicados
    const yaExistente = favDentists.some(dentist => dentist.id === id);
    if (yaExistente) {
      favDentists = favDentists.filter(dentist => dentist.id !== id);
      localStorage.setItem('favs', JSON.stringify(favDentists));
      alert("Dentist removed successfully");
      window.location.reload();
    } else {
      favDentists.push(newFav);
      localStorage.setItem('favs', JSON.stringify(favDentists));
      alert("Dentist added successfully");
    }
  }

  return (
    <div className={`card ${state.theme}`}>
      {/* En cada card deberan mostrar en name - username */}
      <img src="./images/doctor.jpg"/>
      <h4>{name}</h4>
      <p>{username}</p>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <Link to={`/dentist/${id}`}>
        <button className="detailButton">Ver Detalles</button>
      </Link>

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <p onClick={addFav} className="favButton">⭐️</p>
    </div>
  );
};

export default Card;



