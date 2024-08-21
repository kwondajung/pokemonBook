import React, { useState } from 'react';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import MOCK_DATA from '../mock';
import PokemonCard from '../components/PokemonCard';

function Dex() {
  const [selcetdPokemon, setSelctedPokemon] = useState([]);
  return (
    <>
      <Dashboard selcetdPokemon={selcetdPokemon} />
      <PokemonList pokemonList={MOCK_DATA} />
    </>
  );
}

export default Dex;
