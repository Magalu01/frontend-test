/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ReleasesOfHeroes from '../ReleasesOfHeroes';
import {
  Container,
  ContentByHero,
  LeftItem,
  RightItem,
  HeroTitle,
  InfoHero,
} from './styles';

import iconHeart from '../../assets/icones/heart/Path.png';
import HeroPhoto from '../../assets/star-lord.jpeg';

const HeroeSelected = () => {
  return (
    <Container>
      <ContentByHero>
        <LeftItem>
          <HeroTitle>
            <h1>HULK</h1>
            <img src={iconHeart} alt="" />
          </HeroTitle>
          <InfoHero>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div>
              <div>
                <p></p>
                <div>
                  <img src="" alt="" />
                  <h5> 3.000 </h5>
                </div>
              </div>
              <div>
                <p></p>
                <div>
                  <img src="" alt="" />
                  <h5> 40 </h5>
                </div>
              </div>
              <div>
                <p>Rating: </p>
                <img src="" alt="" />
              </div>
              <div>
                <p>Último quadrinho: </p>
                <b>13 fev 2020</b>
              </div>
            </div>
          </InfoHero>
        </LeftItem>
        <RightItem>
          <img src={HeroPhoto} alt="" />
        </RightItem>
      </ContentByHero>
      <ReleasesOfHeroes />
    </Container>
  );
};

export default HeroeSelected;
