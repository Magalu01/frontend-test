/* eslint-disable no-console */
import React, { useEffect, useSelector } from 'react';
import { useDispatch } from 'react-redux';
import { getAllHeroes } from '../../store/actions/Home';

// import { Container } from './styles';

const Home = () => {
  const dispatch = useDispatch();

  const selector = useSelector((state) => {
    console.log(state);
  });
  console.log(selector);
  useEffect(() => {
    dispatch(getAllHeroes());
  }, []);

  return <div />;
};

export default Home;
