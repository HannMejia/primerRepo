import React from 'react';
import { useLocation } from 'react-router-dom';

const ContactPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');

  return (
    <div style={{ padding: '20px' }}>
      <h2>Contáctanos</h2>
      {name && <p>¡Hola, {name}! Gracias por tu interés, por favor completa el formulario.</p>}
      <form>
        <label>
          Nombre:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Mensaje:
          <textarea name="message" />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactPage;
