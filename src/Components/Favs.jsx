import React from 'react';

const Favs = () => {
  const favs = JSON.parse(localStorage.getItem('favs')) || [];

  return (
    <div>
      {favs.map(dentist => (
        <div key={dentist.id}>
          <h3>{dentist.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Favs;
