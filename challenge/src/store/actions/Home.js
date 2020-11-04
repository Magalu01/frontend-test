/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import API from 'axios';
// import { TYPES } from '../types/Home';

// const { HOME } = TYPES;

export const getAllHeroes = () => {
  return (dispatch) => {
    API.get('/')
      .then((response) => {
        console.log('teste redux connected');
        dispatch({
          type: 'UHUUHUHUH',
          payload: response.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
