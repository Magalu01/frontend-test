import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllHeroes } from '../../store/actions/Home';

// import { Container } from './styles';

const Home = () => {
  const dispatch = useDispatch();

  const selector = useSelector((state) => state);
  console.log(selector);

  useEffect(async () => {
    await dispatch(getAllHeroes());
  }, []);

  return <div />;
};

export default Home;
