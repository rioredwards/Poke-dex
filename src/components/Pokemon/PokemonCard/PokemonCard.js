import './PokemonCard.css';
import React from 'react';

export default function PokemonCard({ id, name, type_1, type_2, image, color_1, color_2 }) {
  return (
    <div className="card-container" style={{ backgroundColor: color_1 }}>
      <div className="card-text-container">
        <h1 className="card-title">{name}</h1>
        <p className="card-id">{id}</p>
        <div className="card-type-container">
          <p className="card-type">{type_1}</p>
          <p className="card-type">{type_2}</p>
        </div>
      </div>
      <img className="card-image" src={image} alt={name}></img>
    </div>
  );
}
