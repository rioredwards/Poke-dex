export async function fetchInitialPokemon() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex');
  const data = await resp.json();
  return data.results;
}

export async function fetchTypes() {
  const resp = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  return data;
}

export async function fetchPokemon(type, search) {
  const params = new URLSearchParams();
  if (type !== 'all') {
    params.set('type', type);
  }
  if (search) {
    params.set('pokemon', search);
  }
  const resp = await fetch(
    `https://alchemy-pokedex.herokuapp.com/api/pokedex/?${params.toString()}`
  );
  const data = await resp.json();
  return data.results;
}
