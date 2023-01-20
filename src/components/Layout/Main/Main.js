import { usePokemon } from '../../../hooks/usePokemon.js';
import Select from '../../Controls/Select/Select.js';
import './Main.css';

export default function Main() {
  const { pokemon, types } = usePokemon();

  return (
    <main>
      <Select types={types} />
      {pokemon.map((poke) => (
        <p key={poke._id}>{poke.pokemon}</p>
      ))}
    </main>
  );
}
