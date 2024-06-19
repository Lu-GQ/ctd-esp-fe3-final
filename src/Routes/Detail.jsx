import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from './utils/GlobalContext';

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context
const Detail = () => {
  const { state } = useContext(GlobalContext);
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    // Fetch para obtener la información de un dentista en específico utilizando el id de la URL
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        console.error('Error fetching dentist:', error);
      }
    };

    fetchDentist();
  }, [id]);

  if (!dentist) {
    return <p>Loading...</p>;
  }

  return (
    <div className={`detail ${state.theme}`}>
      <h1>Detail Dentist {dentist.id}</h1>
      {/* Renderización de la información en detalle de un dentista específico */}
      <p>Name: {dentist.name}</p>
      <p>Email: {dentist.email}</p>
      <p>Phone: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
    </div>
  );
};

export default Detail;
