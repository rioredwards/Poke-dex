import React from 'react';

export default function PokemonCard({ id, name, type_1, type_2, image, color_1, color_2 }) {
  return (
    <div style={{ backgroundColor: color_1 }}>
      <div>
        <h1>{name}</h1>
        <p>{id}</p>
        <p>{type_1}</p>
        <p>{type_2}</p>
      </div>
      <img src={image} alt={name}></img>
    </div>
  );
}
