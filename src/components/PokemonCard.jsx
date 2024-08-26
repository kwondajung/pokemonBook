import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PokemonContainer } from '../pages/Dex';

function PokemonCard({ pokemon, isSelected }) {
  const navigate = useNavigate();
  const { selcetdPokemon, setSelctedPokemon } = useContext(PokemonContainer);

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
    <Card
      onClick={() => {
        navigate(`/pokemon-detail?id=${pokemon.id}`);
      }}
      $pokemon={pokemon}
      $types={pokemon.types}
    >
      <img src={pokemon.img_url} alt={pokemon.name} />
      <p>
        <b>{pokemon.name}</b>
      </p>
      <p style={{ fontSize: 12 }}>
        No.{pokemon.id.toString().padStart(3, '0')}
      </p>
      {isSelected ? (
        <Button
          onClick={(e) => {
            removePokemon(pokemon);
            e.stopPropagation();
          }}
        >
          삭제
        </Button>
      ) : (
        <Button
          onClick={(e) => {
            addPokemon(pokemon);
            e.stopPropagation(); // onClick 이벤트가 자식->부모로 전파되는 걸 방지하는 함수
          }}
        >
          추가
        </Button>
      )}
    </Card>
  );
}

export default PokemonCard;

export const Card = styled.div`
  text-align: center;
  background-color: white;
  border-radius: 10px;
  display: block;
  cursor: pointer;
  padding: 10px;
  &:hover {
    /* background: cornflowerblue; */
    background-color: ${function ({ $types }) {
      if ($types.includes('물')) {
        return 'cornflowerblue';
      } else if ($types.includes('풀')) {
        return '#70bd7d';
      } else if ($types.includes('전기')) {
        return '#ebd03a';
      } else if ($types.includes('독')) {
        return '#a133a5';
      } else if ($types.includes('불꽃')) {
        return '#d14444';
      } else if ($types.includes('페어리')) {
        return '#ff97e0';
      } else {
        return 'gray';
      }
    }};
    color: white;
    transition: all 0.5s ease;
    transform: scale(1.1);
  }
`;

export const Button = styled.button`
  cursor: pointer;
  /* display: absolute; */
  z-index: 1;
  border: none;
  height: 40px;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  margin: auto;
`;
