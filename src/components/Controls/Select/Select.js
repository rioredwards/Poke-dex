import './Select.css';
import React from 'react';

export default function Select({ types, handleTypeChange }) {
  return (
    <select className="select" onChange={(e) => handleTypeChange(e.target.value)}>
      <option value="all">all</option>
      {types.map(({ type }) => (
        <option key={type}>{type}</option>
      ))}
    </select>
  );
}
