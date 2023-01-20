import React from 'react';

export default function PokemonCard({ name, type_1, type_2 }) {
  return (
    <div>
      {name} {type_1} {type_2}
    </div>
  );
}
