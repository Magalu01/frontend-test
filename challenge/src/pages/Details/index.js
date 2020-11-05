import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Header, Content } from './styles';

import FilterHeroesDetails from '../../components/FilterHeroesDetails';
import HeroeSelected from '../../components/HeroeSelected';

const Details = () => {
  const { hero } = useSelector((state) => state.heroes);
  return (
    <Container>
      <Header>
        <FilterHeroesDetails />
      </Header>
      <Content>
        <HeroeSelected hero={hero} />
      </Content>
    </Container>
  );
};

export default Details;
