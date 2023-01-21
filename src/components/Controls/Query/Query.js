import React from 'react';
import './Query.css';

export default function Query({ inputValue, changeHandler, handleFormSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit();
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
        value={inputValue}
        onChange={(e) => changeHandler(e.target.value)}
      ></input>
    </form>
  );
}
