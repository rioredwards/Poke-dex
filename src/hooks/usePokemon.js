import { useEffect, useState } from 'react';
import { fetchInitialPokemon } from '../services/fetchPokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchInitialPokemon();
        setPokemon(resp);
      } catch (error) {
        setError('Uh Oh! Something went wrong!');
      }
    };
    fetchData();
    console.log('pokemon', pokemon);
  }, []);

  return { pokemon, error };
}
