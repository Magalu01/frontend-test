import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReleasesOfHeroes from '../ReleasesOfHeroes';
import {
  Container,
  ContentByHero,
  LeftItem,
  RightItem,
  HeroTitle,
  InfoHero,
  Books,
  Movies,
  BooksAndMovies,
  Date,
  Rating,
} from './styles';
import iconHeart from '../../assets/icones/heart/Path.png';
import iconNoBoardHeart from '../../assets/icones/heart/Path Copy 2.png';
import Video from '../../assets/icones/video/Shape.png';
import Book from '../../assets/icones/book/Group.png';
import Star from '../../assets/review/Group 4.png';

import {
  getHeroById,
  getComics,
  favoriteHeroes,
} from '../../store/actions/Heroes';
import redirect from '../../utils/redirect';

const HeroeSelected = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { location } = history;

  redirect();

  const { comicsBy, hero, favorites } = useSelector((state) => state.heroes);

  useEffect(() => {
    if (hero.id) {
      dispatch(getComics(hero.id));
    } else {
      const { state } = location;
      if (state) {
        dispatch(getHeroById(state.id));
        dispatch(getComics(state.id));
      } else {
        history.push('/');
      }
    }
  }, [hero]);

  let general = {};

  if (hero.id) {
    const { id, name, series, comics, description, thumbnail } = hero;
    const itemsStories = comics;
    const { available } = series;
    const { path, extension } = thumbnail;
    const favorite = favorites.find((p) => p.id === id);
    general = {
      favorite,
      id,
      name,
      series,
      comics,
      description,
      itemsStories,
      thumbnail,
      available,
      path,
      extension,
    };
  } else {
    history.push('/');
  }

  const checkFavorite = (item) => {
    const findExistInFavorites = favorites.find((p) => p.id === item);
    if (!findExistInFavorites) {
      if (favorites.length < 5) {
        favorites.sort(
          (a, b) => a.name - b.name || a.name.localeCompare(b.name)
        );
        dispatch(favoriteHeroes([...favorites, hero]));
      }
    } else {
      const newItem = favorites.filter((f) => f.id !== item);
      newItem.sort((a, b) => a.name - b.name || a.name.localeCompare(b.name));
      dispatch(favoriteHeroes([...newItem]));
    }
  };

  return (
    <Container>
      <ContentByHero>
        <LeftItem>
          <HeroTitle>
            <h1>{general.name || ''}</h1>
            <img
              src={general.favorite ? iconHeart : iconNoBoardHeart}
              alt="heart"
              onClick={() => checkFavorite(general.id)}
            />
          </HeroTitle>
          <InfoHero>
            <p>{general.description || ''}</p>
            <BooksAndMovies>
              <Books>
                <p>Quadrinhos</p>
                <div>
                  <img src={Book} alt="" />
                  {
                    <h5>
                      {general && general.itemsStories
                        ? general.itemsStories.available
                        : ''}
                    </h5>
                  }
                </div>
              </Books>
              <Movies>
                <p>Filmes</p>
                <div>
                  <img src={Video} alt="" />
                  {<h5>{general.available || ''}</h5>}
                </div>
              </Movies>
            </BooksAndMovies>
            <Rating>
              <p>Rating: </p>
              <img src={Star} alt="" />
            </Rating>
            <Date>
              <p>Último quadrinho: </p>
              <b>13 fev 2020</b>
            </Date>
          </InfoHero>
        </LeftItem>
        <RightItem>
          {general && general.path && general.extension ? (
            <img src={`${general.path}.${general.extension}`} alt="" />
          ) : (
            <img src={`/`} alt="" />
          )}
        </RightItem>
      </ContentByHero>
      <ReleasesOfHeroes
        idHero={location.state ? location.state.id : ''}
        comicsByGet={comicsBy}
        history={history}
      />
    </Container>
  );
};

export default HeroeSelected;
