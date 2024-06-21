import React, { useContext } from 'react';
import Card from "../Components/Card";
import { GlobalContext } from "../Components/utils/GlobalContext";

const Favs = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const favs = JSON.parse(localStorage.getItem('favs')) || [];

  return (
    <div className={`content favs ${state.theme}`}>
       <h2 class="center-text">Dentists Favs</h2>
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
