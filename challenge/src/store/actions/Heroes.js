import API from 'axios';
import { TYPES } from '../types/Heroes';
import url from '../../services/api';

const { Heroes, Favorites, GetHeroById, Comics } = TYPES;

export const getAllHeroes = (name) => {
  const nameParam = name ? `&nameStartsWith=${name}` : '';
  return (dispatch) => {
    API.get(
      `${url}/characters?ts=${process.env.REACT_APP_TIMESTAMP}&apikey=${
        process.env.REACT_APP_PUB_KEY
      }&hash=${process.env.REACT_APP_HASH}&limit=${20}${nameParam}`
    )
      .then((response) => {
        const { data } = response.data;
        const { results } = data;
        dispatch({
          type: Heroes,
          payload: results,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const favoriteHeroes = (params) => {
  return (dispatch) => {
    dispatch({
      type: Favorites,
      payload: params,
    });
  };
};

export const selectedHero = (params) => {
  return (dispatch) => {
    dispatch({
      type: GetHeroById,
      payload: params,
    });
  };
};

export const getHeroById = (id) => {
  return (dispatch) => {
    API.get(
      `${url}/characters/${id}?ts=${process.env.REACT_APP_TIMESTAMP}&apikey=${process.env.REACT_APP_PUB_KEY}&hash=${process.env.REACT_APP_HASH}`
    )
      .then((response) => {
        const { data } = response.data;
        const { results } = data;
        dispatch({
          type: GetHeroById,
          payload: results[0],
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const getComics = (id) => {
  return (dispatch) => {
    API.get(
      `${url}/characters/${id}/comics?ts=${process.env.REACT_APP_TIMESTAMP}&apikey=${process.env.REACT_APP_PUB_KEY}&hash=${process.env.REACT_APP_HASH}`
    )
      .then((response) => {
        const { data } = response.data;
        const { results } = data;
        dispatch({
          type: Comics,
          payload: results,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const getHeroByDetail = (name) => {
  const nameParam = name ? `&nameStartsWith=${name}` : '';

  return (dispatch) => {
    API.get(
      `${url}/characters?ts=${process.env.REACT_APP_TIMESTAMP}&apikey=${
        process.env.REACT_APP_PUB_KEY
      }&hash=${process.env.REACT_APP_HASH}&limit=${20}${nameParam}`
    )
      .then((response) => {
        const { data } = response.data;
        const { results } = data;
        dispatch({
          type: GetHeroById,
          payload: results[0],
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
