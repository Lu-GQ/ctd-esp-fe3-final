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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre completo</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <button type="submit">Enviar</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default Contact;

