import React from 'react';
import { Container, Header, Content } from './styles';

import FilterHeroesDetails from '../../components/FilterHeroesDetails';

const Details = () => {
  return (
    <Container>
      <Header>
        <FilterHeroesDetails />
      </Header>
      <Content />
    </Container>
  );
};

export default Details;
