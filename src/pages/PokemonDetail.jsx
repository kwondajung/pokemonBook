import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const PokemonDetail = () => {
  //   const params = useParams();
  //   const id = params.id;

  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  //   const name = searchParams.get('name');
  console.log(id);

  return <DetailInfo>{id}번 포켓몬</DetailInfo>;
};

export default PokemonDetail;

const DetailInfo = styled.div``;
