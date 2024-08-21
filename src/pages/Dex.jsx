import React, { useState } from 'react';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import MOCK_DATA from '../mock';
import PokemonCard from '../components/PokemonCard';

function Dex() {
  const [selcetdPokemon, setSelctedPokemon] = useState([]);

  // 포켓몬 선택하기
  const addPokemon = (pokemon) => {
    const newArr = [...selcetdPokemon, pokemon];
    setSelctedPokemon(newArr);
  };
  console.log(selcetdPokemon);
  // 선택한 포켓몬 제거하기
  const removePokemon = (pokemon) => {};
  return (
    <>
      <Dashboard
        selcetdPokemon={selcetdPokemon}
        onRemovePokemon={removePokemon}
      />
      <PokemonList pokemonList={MOCK_DATA} onAddPokemon={addPokemon} />
    </>
  );
}

export default Dex;
