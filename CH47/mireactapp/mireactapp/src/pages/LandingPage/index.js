// src/pages/LandingPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleNavigate = () => {
    navigate(`/contacto?name=${encodeURIComponent(name)}`);
  };

  return (
    <div>
      <h2>¿Quieres más información?</h2>
      <label>
        Coloca tu nombre:
        <input type="text" value={name} onChange={handleInputChange} />
      </label>
      <button onClick={handleNavigate}>Ir a Contáctanos</button>
    </div>
  );
};

export default LandingPage;
