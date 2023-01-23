import React, { useState } from 'react';
import './Query.css';

export default function Query({ setQuerySubmitValue }) {
  const [queryInputValue, setQueryInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuerySubmitValue(queryInputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <button className="search-btn">
        <img className="search-icon" src="./search.png" alt="search" />
      </button>
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={queryInputValue}
        onChange={(e) => setQueryInputValue(e.target.value)}
      ></input>
    </form>
  );
}
