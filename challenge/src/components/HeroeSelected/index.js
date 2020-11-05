/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { getComics } from '../../store/actions/Heroes';

const HeroeSelected = ({ hero }) => {
  const { id, name, series, comics, description, thumbnail } = hero;
  const itemsStories = comics;
  const { available } = series;
  const { path, extension } = thumbnail;

  const dispatch = useDispatch();
  const history = useHistory();
  const { comicsBy } = useSelector((state) => state.heroes);

  useEffect(() => {
    dispatch(getComics(id));
  }, []);

  return (
    <Container>
      <ContentByHero>
        <LeftItem>
          <HeroTitle>
            <h1>{name || ''}</h1>
            <img src={iconHeart} alt="heart" />
          </HeroTitle>
          <InfoHero>
            <p>{description || ''}</p>
            <BooksAndMovies>
              <Books>
                <p>Quadrinhos</p>
                <div>
                  <img src={Book} alt="" />
                  <h5>{itemsStories.available || ''}</h5>
                </div>
              </Books>
              <Movies>
                <p>Filmes</p>
                <div>
                  <img src={Video} alt="" />
                  <h5>{available || ''}</h5>
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
          <img src={`${path}.${extension}`} alt="" />
        </RightItem>
      </ContentByHero>
      <ReleasesOfHeroes idHero={id} comicsByGet={comicsBy} />
    </Container>
  );
};

export default HeroeSelected;
