import React, { useContext, useReducer } from 'react';
import Card from "../Components/Card";
import { GlobalContext } from "../Components/utils/GlobalContext";

const Favs = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const favs = JSON.parse(localStorage.getItem('favs')) || [];
  const resetFavs = () => {
    const confirmaBorrado = window.confirm("Confirm reset dentist list?");
    if (confirmaBorrado) {
      localStorage.setItem('favs', JSON.stringify([]));
      alert("Dentist list reset successfully");
      forceUpdate();
    }
  }

  return (
    <div className={`content favs ${state.theme}`}>
       <h2 className="center-text">Dentists Favs</h2>
       {favs.length > 0 && <button className="resetButton" onClick={resetFavs} >Reiniciar favoritos</button>}
       <div className="card-container">
        {favs.map((dentist) => (
          <Card
            key={dentist.id}
            id={dentist.id}
            name={dentist.name}
            username={dentist.username}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;
