import { usePokemon } from '../../../hooks/usePokemon.js';
import Select from '../../Controls/Select/Select.js';
import './Main.css';

export default function Main() {
  const { pokemon, types, selectedType, handleTypeChange } = usePokemon();

  return (
    <main>
      <Select types={types} selectedType={selectedType} handleTypeChange={handleTypeChange} />
      {pokemon.map((poke) => (
        <p key={poke._id}>
          {poke.pokemon} {poke.type_1} {poke.type_2}
        </p>
      ))}
    </main>
  );
}
