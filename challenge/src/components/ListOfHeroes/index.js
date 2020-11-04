import React from 'react';
import iconHeart from '../../assets/icones/heart/Path.png';
import iconNoBoardHeart from '../../assets/icones/heart/Path Copy 2.png';
import iconHero from '../../assets/icones/heroi/noun_Superhero_2227044.png';
import teste from '../../assets/star-lord.jpeg';

import {
  List,
  TitleList,
  LeftTitle,
  RightTitle,
  Ordenable,
  SwitchButton,
  Favorites,
  BodyList,
  HeroItem,
  ImgHero,
  InfosHero,
} from './styles';

const ListOfHeroes = () => {
  return (
    <List>
      <TitleList>
        <LeftTitle>
          <h4>Encontrados 20 heroís</h4>
        </LeftTitle>
        <RightTitle>
          <Ordenable>
            <img src={iconHero} alt="" />
            <h4>Ordenar por nome - A/Z</h4>
            <SwitchButton onColor={'#ff1510'} />
          </Ordenable>
          <Favorites>
            <img src={iconHeart} alt="" />
            <h4>Somente favoritos</h4>
          </Favorites>
        </RightTitle>
      </TitleList>
      <BodyList>
        <HeroItem>
          <ImgHero>
            <img src={teste} alt="star-lord" />
          </ImgHero>
          <InfosHero>
            <h4>Star- Lord</h4>
            <button>
              <img src={iconNoBoardHeart} alt="" />
            </button>
          </InfosHero>
        </HeroItem>
        <HeroItem>
          <ImgHero>
            <img src={teste} alt="star-lord" />
          </ImgHero>
          <InfosHero>
            <h4>Star- Lord</h4>
            <button>
              <img src={iconNoBoardHeart} alt="" />
            </button>
          </InfosHero>
        </HeroItem>
        <HeroItem>
          <ImgHero>
            <img src={teste} alt="star-lord" />
          </ImgHero>
          <InfosHero>
            <h4>Star- Lord</h4>
            <button>
              <img src={iconNoBoardHeart} alt="" />
            </button>
          </InfosHero>
        </HeroItem>
        <HeroItem>
          <ImgHero>
            <img src={teste} alt="star-lord" />
          </ImgHero>
          <InfosHero>
            <h4>Star- Lord</h4>
            <button>
              <img src={iconNoBoardHeart} alt="" />
            </button>
          </InfosHero>
        </HeroItem>
      </BodyList>
    </List>
  );
};

export default ListOfHeroes;
