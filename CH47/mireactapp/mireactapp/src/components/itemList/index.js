import React from 'react';

const ItemList = () => {
  const items = ['React', 'Material-UI', 'React Router'];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;
