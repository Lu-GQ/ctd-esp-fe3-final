import React, { useContext } from 'react';
import Form from '../Components/Form';
import { GlobalContext } from './utils/GlobalContext';

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context
const Contact = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div className={`contact ${state.theme}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
}

export default Contact;
