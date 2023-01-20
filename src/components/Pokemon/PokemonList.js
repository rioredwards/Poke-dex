import PokemonCard from './PokemonCard/PokemonCard.js';

export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map((poke) => (
        <PokemonCard key={poke._id} name={poke.pokemon} type_1={poke.type_1} type_2={poke.type_2} />
      ))}
    </div>
  );
}
