import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../Components/utils/GlobalContext';

const DentistDetail = () => {
  const { id } = useParams();
  const { state } = useContext(GlobalContext);
  /*useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(response => response.json())
        .then(data => dispatch({ type: 'SET_DENTISTS', payload: data }));
    }, [dispatch]);
    */
  const dentist = state.dentists.find(dentist => dentist.id === parseInt(id));

  return (
    <div>
      {dentist ? (
        <>
          <h2>{dentist.name}</h2>
          <p>Email: {dentist.email}</p>
          <p>Teléfono: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </>
      ) : (
        <p>Dentista no encontrado.</p>
      )}
    </div>
  );
};

export default DentistDetail;
