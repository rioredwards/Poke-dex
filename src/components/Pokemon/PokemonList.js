import PokemonCard from './PokemonCard/PokemonCard.js';

export default function PokemonList({ pokemon, loading }) {
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      {pokemon.map((poke) => (
        <PokemonCard
          key={poke._id}
          id={poke.id}
          name={poke.pokemon}
          type_1={poke.type_1}
          type_2={poke.type_2}
          color_1={poke.color_1}
          color_2={poke.color_2}
          image={poke.url_image}
        />
      ))}
    </div>
  );
}
