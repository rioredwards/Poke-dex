import { useEffect, useState } from 'react';
import { fetchInitialPokemon, fetchPokemon, fetchTypes } from '../services/fetchPokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [querySubmitValue, setQuerySubmitValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const resp = await fetchInitialPokemon();
        setPokemon(resp);
        setLoading(false);
      } catch (error) {
        setError('Uh Oh! Something went wrong!');
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const resp = await fetchTypes();
        setTypes(resp);
        setLoading(false);
      } catch (error) {
        setError('Uh Oh! Something went wrong!');
      }
    };
    fetchData();
  }, []);

  const handleTypeChange = async (type) => {
    setSelectedType(`${type}`);
  };

  useEffect(() => {
    if (selectedType === 'default') {
      // initial state --> Don't fetch anything
      return;
    }
    const fetchData = async () => {
      setLoading(true);
      try {
        let resp = null;
        // type selected state --> fetch pokemon of selected type
        resp = await fetchPokemon(selectedType, querySubmitValue);
        setPokemon(resp);
        setLoading(false);
      } catch (error) {
        setError('Uh Oh! Something went wrong!');
      }
    };

    fetchData();
  }, [querySubmitValue, selectedType]);

  return {
    pokemon,
    types,
    handleTypeChange,
    querySubmitValue,
    setQuerySubmitValue,
    error,
    loading,
  };
}
