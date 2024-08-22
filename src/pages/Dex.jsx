import React, { useState } from 'react';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import MOCK_DATA from '../mock';
import PokemonCard from '../components/PokemonCard';

// const defaultValue = pokemon.map(function () {});

function Dex() {
  const [selcetdPokemon, setSelctedPokemon] = useState([]);
  const [pokemon, setPokemon] = useState([]); // mock_data

  // 포켓몬 선택하기
  // 1. 같은 id를 가진 포켓몬 중복 선택 시 => alert
  // 2. 그렇지 않으면 추가
  // 3. 배열의 개수가 6이 넘을 시 => alert

  // 👇원래 코드 (작동 잘 됨)
  // const addPokemon = (pokemon) => {
  //   if (selcetdPokemon.length > 5) {
  //     return alert('포켓몬은 최대 6마리만 데리고 갈 수 있어요!');
  //   } else {
  //     const newArr = [...selcetdPokemon, pokemon];
  //     setSelctedPokemon(newArr);
  //   }
  // };

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
      return alert(`${pokemon.korean_name}은(는) 이미 데리고 있어요!`);
    }

    // if(findPoke){
    //   alert('중복');
    //   return;
    // } else {
    //   const newArr = [...selcetdPokemon, pokemon];
    //   setSelctedPokemon(newArr);
    //   return;
    // }
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

// mock_data state 초기값으로 빼기 = > 포켓볼 상태, 포켓몬 카드 상태
