import { usePokemon } from '../../../hooks/usePokemon.js';
import Query from '../../Controls/Query/Query.js';
import Select from '../../Controls/Select/Select.js';
import './Main.css';

export default function Main() {
  const { pokemon, types, handleTypeChange, query, setQuery, handleButtonClick } = usePokemon();

  return (
    <main>
      <Select types={types} handleTypeChange={handleTypeChange} />
      <Query inputValue={query} changeHandler={setQuery} handleButtonClick={handleButtonClick} />
      {pokemon.map((poke) => (
        <p key={poke._id}>
          {poke.pokemon} {poke.type_1} {poke.type_2}
        </p>
      ))}
    </main>
  );
}
