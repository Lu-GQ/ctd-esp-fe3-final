import React, { useContext, useEffect } from 'react';
import { GlobalContext } from './utils/GlobalContext';
import Card from './Card';
import { Link } from 'react-router-dom';

const Home = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    fetch('https://api.example.com/dentists')
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_DENTISTS', payload: data }));
  }, [dispatch]);

  return (
    <div className="home">
      {state.dentists.map(dentist => (
        <Card
          key={dentist.id}
          id={dentist.id}
          name={dentist.name}
          username={dentist.username}
        />
      ))}
    </div>
  );
};

export default Home;
