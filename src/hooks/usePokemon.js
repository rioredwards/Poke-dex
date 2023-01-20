import { useEffect, useState } from 'react';
import { fetchInitialPokemon, fetchPokemonType, fetchTypes } from '../services/fetchPokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('default');

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
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchTypes();
        setTypes(resp);
      } catch (error) {
        setError('Uh Oh! Something went wrong!');
      }
    };
    fetchData();
  }, []);

  const handleTypeChange = async (type) => {
    setSelectedType(type);
  };

  useEffect(() => {
    if (selectedType === 'default') {
      // initial state --> Don't fetch anything
      return;
    }
    const fetchData = async () => {
      try {
        let resp = null;
        if (selectedType === 'all') {
          // all state --> fetch initial pokemon
          resp = await fetchInitialPokemon();
        } else {
          // type selected state --> fetch pokemon of selected type
          resp = await fetchPokemonType(selectedType);
        }
        setPokemon(resp);
      } catch (error) {
        setError('Uh Oh! Something went wrong!');
      }
    };
    fetchData();
  }, [selectedType]);

  return { pokemon, error, types, selectedType, handleTypeChange };
}
