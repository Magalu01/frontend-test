import React from 'react';
import { Container, Header, Content } from './styles';

import FilterHeroesDetails from '../../components/FilterHeroesDetails';
import HeroeSelected from '../../components/HeroeSelected';

const Details = () => {
  return (
    <Container>
      <Header>
        <FilterHeroesDetails />
      </Header>
      <Content>
        <HeroeSelected />
      </Content>
    </Container>
  );
};

export default Details;
