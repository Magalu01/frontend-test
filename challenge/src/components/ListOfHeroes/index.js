/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import iconHeart from '../../assets/icones/heart/Path.png';
import iconNoBoardHeart from '../../assets/icones/heart/Path Copy 2.png';
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
  HeroItem,
  ImgHero,
  InfosHero,
} from './styles';
import { getAllHeroes, favoriteHeroes } from '../../store/actions/Heroes';

const ListOfHeroes = ({
  heroes,
  setAllHeroes,
  setOrder,
  order,
  setMyFavorites,
  myFavorites,
}) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.heroes);
  const [heroesSorter, setHeroesSorter] = useState([]);

  useEffect(() => {
    setHeroesSorter(heroes);
  }, [
    heroesSorter,
    setHeroesSorter,
    setAllHeroes,
    myFavorites,
    setMyFavorites,
  ]);

  const changeOrder = (ord) => {
    if (ord) {
      heroes = heroes
        ? heroes.sort((a, b) => b.name - a.name || b.name.localeCompare(a.name))
        : [];
      setHeroesSorter(heroes);
      setOrder(ord);
    } else {
      heroes = heroes
        ? heroes.sort((a, b) => a.name - b.name || a.name.localeCompare(b.name))
        : [];
      setHeroesSorter(heroes);
      setOrder(ord);
    }
  };

  const checkFavorite = (item) => {
    const findHero = heroes.find((p) => p.id === item);
    const findExistInFavorites = favorites.find((p) => p.id === item);
    if (!findExistInFavorites) {
      if (favorites.length < 5) {
        dispatch(favoriteHeroes([...favorites, findHero]));
      }
    } else {
      const newItem = favorites.filter((f) => f.id !== item);
      dispatch(favoriteHeroes([...newItem]));
    }
  };

  const favoritesSelected = () => {
    if (!myFavorites) {
      setMyFavorites(true);
      setAllHeroes(favorites || heroes);
    } else {
      setMyFavorites(false);
      dispatch(getAllHeroes());
      setAllHeroes(heroes);
    }
  };

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
            <SwitchButton
              onColor={'#ff1510'}
              offHandleColor={'#fff'}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow={''}
              activeBoxShadow={''}
              onChange={(e) => changeOrder(e)}
              checked={order}
            />
          </Ordenable>
          <Favorites onClick={() => favoritesSelected()}>
            <img src={iconHeart} alt="heart" />
            <h4>Somente favoritos</h4>
          </Favorites>
        </RightTitle>
      </TitleList>
      <BodyList>
        {heroes.length > 0
          ? heroes.map((h) => {
              const { path, extension } = h.thumbnail;
              return (
                <HeroItem key={h.id}>
                  <ImgHero>
                    <img src={`${path}.${extension}`} alt={h.name} />
                  </ImgHero>
                  <InfosHero>
                    <h4>{h.name}</h4>
                    <button onClick={() => checkFavorite(h.id)}>
                      <img src={iconNoBoardHeart} alt="icons-heart" />
                    </button>
                  </InfosHero>
                </HeroItem>
              );
            })
          : []}
      </BodyList>
    </List>
  );
};

export default ListOfHeroes;
