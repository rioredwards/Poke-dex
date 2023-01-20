import { useEffect, useState } from 'react';
import { fetchInitialPokemon, fetchPokemonType, fetchTypes } from '../services/fetchPokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState([]);

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
    const fetchData = async () => {
      try {
        const resp = await fetchPokemonType(selectedType);
        setPokemon(resp);
      } catch (error) {
        setError('Uh Oh! Something went wrong!');
      }
    };
    fetchData();
  }, [selectedType]);

  return { pokemon, error, types, handleTypeChange };
}
