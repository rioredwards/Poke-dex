import { usePokemon } from '../../../hooks/usePokemon.js';
import './Main.css';

export default function Main() {
  const { pokemon } = usePokemon();

  return (
    <main>
      {pokemon.map((poke) => (
        <p key={poke._id}>{poke.pokemon}</p>
      ))}
    </main>
  );
}
