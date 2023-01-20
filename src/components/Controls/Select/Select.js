import React from 'react';

export default function Select({ types }) {
  return (
    <select>
      {types.map(({ type }) => (
        <option key={type}>{type}</option>
      ))}
    </select>
  );
}
