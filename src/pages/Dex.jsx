import React, { createContext, useState } from 'react';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import MOCK_DATA from '../mock';

export const PokemonContainer = createContext();
function Dex() {
  const [selcetdPokemon, setSelctedPokemon] = useState([]);

  // 포켓몬 선택하기
  const addPokemon = (pokemon) => {
    // 중복 찾기: id끼리 비교해서 중복된 게 있으면 true => 중복값 반환 => 중복값 findPoke에 할당
    // 중복 요소 못 찾을 시 undefined 반환 => 중복되는 게 없으니 배열에 추가하면 됨
    const findPokemon = selcetdPokemon.find(function (sameId) {
      if (sameId.id === pokemon.id) {
        return true;
      } else {
        return false;
      }
    });

    if (selcetdPokemon.length > 5) {
      alert('포켓몬은 최대 6마리만 데리고 갈 수 있어요!');
    } else if (findPokemon === undefined) {
      const newArr = [...selcetdPokemon, pokemon];
      setSelctedPokemon(newArr);
    } else {
      return alert(`${pokemon.name}은(는) 이미 데리고 있어요!`);
    }
  };

  // 선택한 포켓몬 제거하기
  const removePokemon = (pokemon) => {
    const deletePokemon = selcetdPokemon.filter(function (del) {
      if (del.id === pokemon.id) {
        return false;
      } else {
        return true;
      }
    });
    setSelctedPokemon(deletePokemon);
  };
  return (
    <PokemonContainer.Provider
      value={{
        selcetdPokemon,
        setSelctedPokemon,
        removePokemon, //뺴
        pokemonList: MOCK_DATA, //props
        addPokemon, //빼
      }}
    >
      <Dashboard />
      <PokemonList pokemonList={MOCK_DATA} />
    </PokemonContainer.Provider>
  );
}

export default Dex;
