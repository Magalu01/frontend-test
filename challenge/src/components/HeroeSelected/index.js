/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
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
import Video from '../../assets/icones/video/Shape.png';
import Book from '../../assets/icones/book/Group.png';
import Star from '../../assets/review/Group 4.png';

import { getHeroById, getComics } from '../../store/actions/Heroes';

const HeroeSelected = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { location } = history;
  const { comicsBy, hero } = useSelector((state) => state.heroes);

  useEffect(() => {
    if (hero.id) {
      dispatch(getComics(hero.id));
    } else {
      const { state } = location;
      dispatch(getHeroById(state.id));
      dispatch(getComics(state.id));
    }
  }, []);

  let general = {};

  if (hero.id) {
    const { name, series, comics, description, thumbnail } = hero;
    const itemsStories = comics;
    const { available } = series;
    const { path, extension } = thumbnail;
    // eslint-disable-next-line no-unused-vars

    general = {
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
  }

  return (
    <Container>
      <ContentByHero>
        <LeftItem>
          <HeroTitle>
            <h1>{general.name || ''}</h1>
            <img src={iconHeart} alt="heart" />
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
        idHero={location.state.id}
        comicsByGet={comicsBy}
        history={history}
      />
    </Container>
  );
};

export default HeroeSelected;
