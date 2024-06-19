import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../Components/utils/GlobalContext';

const DentistDetail = () => {
  const { id } = useParams();
  const { state } = useContext(GlobalContext);
  const [dentist, setDentist] = useState(null);
  useEffect(() => {
      // Fetch para obtener la información del dentista con el id correspondiente
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

    return (
      <div className={`detail ${state.theme}`}>
        <h1>Detail Dentist id {id}</h1>
        {dentist ? (
          <div>
            <p><strong>Name:</strong> {dentist.name}</p>
            <p><strong>Email:</strong> {dentist.email}</p>
            <p><strong>Phone:</strong> {dentist.phone}</p>
            <p><strong>Website:</strong> {dentist.website}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
};

export default DentistDetail;
