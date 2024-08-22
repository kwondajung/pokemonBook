import React, { useState } from 'react';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import MOCK_DATA from '../mock';
import PokemonCard from '../components/PokemonCard';

function Dex() {
  const [selcetdPokemon, setSelctedPokemon] = useState([]);

  // 포켓몬 선택하기
  // 1. 같은 id를 가진 포켓몬 중복 선택 시 => alert
  // 2. 그렇지 않으면 추가
  // 3. 배열의 개수가 6이 넘을 시 => alert
  // const addPokemon = (pokemon) => {
  //   const newArr = [...selcetdPokemon, pokemon];
  //   setSelctedPokemon(newArr);
  // };
  // console.log(selcetdPokemon);

  const addPokemon = (pokemon) => {
    if (selcetdPokemon.length > 5) {
      return alert(`포켓몬은 최대 6마리만 데리고 갈 수 있어요!`);
    } else {
      const newArr = [...selcetdPokemon, pokemon];
      setSelctedPokemon(newArr);
    }
  };

  // 선택한 포켓몬 제거하기
  const removePokemon = (pokemon) => {
    const delPoke = selcetdPokemon.filter(function (del) {
      if (del.id === pokemon.id) {
        return false;
      } else {
        return true;
      }
    });
    setSelctedPokemon(delPoke);
  };
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
