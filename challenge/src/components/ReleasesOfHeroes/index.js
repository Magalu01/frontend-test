import React from 'react';
import teste from '../../assets/star-lord.jpeg';
import { BodyList, ImgHero, HeroItem, InfosHero } from './styles';

const ReleasesOfHeroes = () => {
  return (
    <BodyList>
      <HeroItem>
        <ImgHero>
          <img src={teste} alt="star-lord" />
        </ImgHero>
        <InfosHero>
          <h4>Star- Lord</h4>
        </InfosHero>
      </HeroItem>
      <HeroItem>
        <ImgHero>
          <img src={teste} alt="star-lord" />
        </ImgHero>
        <InfosHero>
          <h4>Star- Lord</h4>
        </InfosHero>
      </HeroItem>
      <HeroItem>
        <ImgHero>
          <img src={teste} alt="star-lord" />
        </ImgHero>
        <InfosHero>
          <h4>Star- Lord</h4>
        </InfosHero>
      </HeroItem>
      <HeroItem>
        <ImgHero>
          <img src={teste} alt="star-lord" />
        </ImgHero>
        <InfosHero>
          <h4>Star- Lord</h4>
        </InfosHero>
      </HeroItem>
    </BodyList>
  );
};

export default ReleasesOfHeroes;
