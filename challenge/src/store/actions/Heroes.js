import API from 'axios';
import { TYPES } from '../types/Heroes';
import url from '../../services/api';

const { Heroes } = TYPES;

export const getAllHeroes = () => {
  return (dispatch) => {
    API.get(
      `${url}/characters?ts=${process.env.REACT_APP_TIMESTAMP}&apikey=${
        process.env.REACT_APP_PUB_KEY
      }&hash=${process.env.REACT_APP_HASH}&limit=${20}`
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
