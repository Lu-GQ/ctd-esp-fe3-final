import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    let valid = true;
    let errors = {};

    if (formData.name.length < 5) {
      errors.name = 'Nombre debe tener al menos 5 caracteres.';
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Formato de email incorrecto.';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setErrors([]);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      setSuccessMessage(`Gracias ${formData.name}, te contactaremos cuando antes vía mail.`);
    } else {
      setSuccessMessage('');
    }
  };

  return (
    <div class="contact">
      <h2>Want to know more?</h2>
      <h4>Send us your questions and we will contact you</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Full name' />
        </div>
        <div>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email'/>
        </div>
        <button type="submit">Enviar</button>
      </form>
      {(errors.name || errors.email) && <p>{"Por favor verifique su información nuevamente"}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default Contact;

