import React from 'react';
import ReleasesOfHeroes from '../ReleasesOfHeroes';
import { Container, ContentByHero } from './styles';

const HeroeSelected = () => {
  return (
    <Container>
      <ContentByHero>
        <div>LEFT</div>
        <div>RIGHT</div>
      </ContentByHero>
      <ReleasesOfHeroes />
    </Container>
  );
};

export default HeroeSelected;
