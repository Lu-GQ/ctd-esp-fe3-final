import React, { useContext, useEffect, useState } from 'react';
import Card from '../Components/Card';
import { GlobalContext } from './utils/GlobalContext';

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context
const Favs = () => {
  const { state } = useContext(GlobalContext);
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    // Consumiendo los destacados del localStorage
    const storedFavs = JSON.parse(localStorage.getItem('favs')) || [];
    setFavs(storedFavs);
  }, []);

  return (
    <div className={`favs ${state.theme}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* Renderizar una Card por cada uno de los destacados */}
        {favs.map(dentist => (
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
        ))}
      </div>
    </div>
  );
};

export default Favs;

