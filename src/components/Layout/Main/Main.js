import { useState } from 'react';
import { usePokemon } from '../../../hooks/usePokemon.js';
import Query from '../../Controls/Query/Query.js';
import Select from '../../Controls/Select/Select.js';
import PokemonList from '../../Pokemon/PokemonList.js';
import './Main.css';

export default function Main() {
  const { pokemon, types, handleTypeChange, setQuerySubmitValue, loading, error } = usePokemon();

  return (
    <main>
      <p>{error}</p>
      <div className="controls">
        <Select types={types} handleTypeChange={handleTypeChange} />
        <Query setQuerySubmitValue={setQuerySubmitValue} />
      </div>
      <PokemonList pokemon={pokemon} loading={loading}></PokemonList>
    </main>
  );
}
