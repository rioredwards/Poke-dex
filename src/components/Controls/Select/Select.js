import React from 'react';

export default function Select({ types, selectedType, handleTypeChange }) {
  return (
    <select value={selectedType} onChange={(e) => handleTypeChange(e.target.value)}>
      <option value="default" disabled={true}>
        select
      </option>
      <option value="all">all</option>
      {types.map(({ type }) => (
        <option key={type}>{type}</option>
      ))}
    </select>
  );
}
