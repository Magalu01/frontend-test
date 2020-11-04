import React from 'react';
import iconHeart from '../../assets/icones/heart/Path.png';
import iconHero from '../../assets/icones/heroi/noun_Superhero_2227044.png';

import {
  List,
  TitleList,
  LeftTitle,
  RightTitle,
  Ordenable,
  SwitchButton,
  Favorites,
  BodyList,
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
      <br />
      <BodyList>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h4>Star- Lord</h4>
            <button>Like</button>
          </div>
        </div>
      </BodyList>
    </List>
  );
};

export default ListOfHeroes;
