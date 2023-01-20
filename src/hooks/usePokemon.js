import { useEffect, useState } from 'react';
import { fetchInitialPokemon, fetchPokemon, fetchTypes } from '../services/fetchPokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [query, setQuery] = useState('');

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
          resp = await fetchPokemon(selectedType);
        }
        setPokemon(resp);
      } catch (error) {
        setError('Uh Oh! Something went wrong!');
      }
    };

    fetchData();
  }, [selectedType]);

  const handleButtonClick = async () => {
    const data = await fetchPokemon(selectedType, query);
    setPokemon(data);
  };

  return {
    pokemon,
    error,
    types,
    handleTypeChange,
    query,
    setQuery,
    handleButtonClick,
  };
}
