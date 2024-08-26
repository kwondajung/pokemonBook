import React, { createContext, useState } from 'react';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import MOCK_DATA from '../mock';

export const PokemonContainer = createContext();
function Dex() {
  const [selcetdPokemon, setSelctedPokemon] = useState([]);

  return (
    <PokemonContainer.Provider
      value={{
        selcetdPokemon,
        setSelctedPokemon,
      }}
    >
      <Dashboard />
      <PokemonList pokemonList={MOCK_DATA} />
    </PokemonContainer.Provider>
  );
}

export default Dex;
