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
        selcetdPokemon, // 모든 걸 dex에서 하지 말고 필요한 곳에서 만들기
        setSelctedPokemon,
      }}
    >
      <Dashboard />
      <PokemonList pokemonList={MOCK_DATA} />
    </PokemonContainer.Provider>
  );
}

export default Dex;
