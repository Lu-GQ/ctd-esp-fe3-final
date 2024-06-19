import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from './utils/GlobalContext';

const DentistDetail = () => {
  const { id } = useParams();
  const { state } = useContext(GlobalContext);
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
