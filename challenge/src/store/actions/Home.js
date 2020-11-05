import API from 'axios';
import { TYPES } from '../types/Home';
import url from '../../services/api';

const { HOME } = TYPES;

export const getAllHeroes = () => {
  return (dispatch) => {
    API.get(
      `${url}/characters?ts=${process.env.REACT_APP_TIMESTAMP}&apikey=${
        process.env.REACT_APP_PUB_KEY
      }&hash=${process.env.REACT_APP_HASH}&limit=${20}`
    )
      .then((response) => {
        dispatch({
          type: HOME,
          payload: response.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
