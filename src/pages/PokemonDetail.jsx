import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import MOCK_DATA from '../mock';

const PokemonDetail = () => {
  // const params = useParams();
  // const id = params.id;
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  // console.log(id);

  const pokemonList = { MOCK_DATA };
  const newPokemon = pokemonList.find(function (findPoke) {
    if (findPoke.id === pokemonList.id) {
      return true;
    } else {
      return false;
    }
  });

  return <DetailInfo>{id}번 포켓몬</DetailInfo>;
};

export default PokemonDetail;

const DetailInfo = styled.div``;
