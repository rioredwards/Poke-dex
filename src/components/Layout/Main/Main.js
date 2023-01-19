import { usePokemon } from '../../../hooks/usePokemon.js';
import { fetchTypes } from '../../../services/fetchPokemon.js';
import './Main.css';

export default function Main() {
  const { pokemon, types } = usePokemon();
  fetchTypes();

  return (
    <main>
      <select>
        {types.map(({ type }) => (
          <option key={type}>{type}</option>
        ))}
      </select>
      {pokemon.map((poke) => (
        <p key={poke._id}>{poke.pokemon}</p>
      ))}
    </main>
  );
}
