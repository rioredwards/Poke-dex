import { usePokemon } from '../../../hooks/usePokemon.js';
import Query from '../../Controls/Query/Query.js';
import Select from '../../Controls/Select/Select.js';
import PokemonList from '../../Pokemon/PokemonList.js';
import './Main.css';

export default function Main() {
  const { pokemon, types, handleTypeChange, query, setQuery, handleButtonClick, loading, error } =
    usePokemon();

  return (
    <main>
      <p>{error}</p>
      <Select types={types} handleTypeChange={handleTypeChange} />
      <Query inputValue={query} changeHandler={setQuery} handleButtonClick={handleButtonClick} />
      <PokemonList pokemon={pokemon} loading={loading}></PokemonList>
    </main>
  );
}
