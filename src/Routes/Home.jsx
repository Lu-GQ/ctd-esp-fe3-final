import React, { useEffect, useState, useContext } from 'react';
import Card from '../Components/Card';
import { GlobalContext } from '../Components/utils/GlobalContext';

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context
const Home = () => {
  const { state } = useContext(GlobalContext);
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    // Fetch para obtener la información de todos los dentistas
    const fetchDentists = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setDentists(data);
      } catch (error) {
        console.error('Error fetching dentists:', error);
      }
    };

    fetchDentists();
  }, []);

  return (
    <main className={`home ${state.theme}`}>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Renderizar las cards de los dentistas */}
        {dentists.map(dentist => (
          <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
