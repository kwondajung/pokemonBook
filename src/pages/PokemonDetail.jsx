import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/PokemonCard';
import MOCK_DATA from '../mock';

// 파람스의 id와 같은 id의 포켓몬 찾기
// 포켓몬 정보 가져오기

const PokemonDetail = () => {
  // const { id } = useParams();
  // const urlId = id;
  // console.log(urlId);

  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');

  const navigate = useNavigate();

  const pokemonList = MOCK_DATA;
  // const newPokemon = (pokemon) => {
  //   pokemonList.find(function (findPoke) {
  //     if (findPoke.id === pokemon.id) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });
  // };

  // console.log(pokemonList);
  // console.log('url ID => ', urlId);
  // console.log('찾았다 => ', newPokemon);

  // const mapPokemon = pokemonList.map(function (mapPoke) {
  //   if (newPokemon.id === mapPoke.id) {
  //     return <DetailInfo>{id}번 포켓몬 등장</DetailInfo>;
  //   } else {
  //     <DetailInfo>로딩에 실패했어요...</DetailInfo>;
  //     return;
  //   }
  // });

  return (
    <DetailInfo>
      {id}번 포켓몬 등장 <br />
      <Button
        onClick={() => {
          navigate('/dex');
        }}
      >
        뒤로 가기
      </Button>
    </DetailInfo>
  );
};

export default PokemonDetail;

const DetailInfo = styled.div``;
