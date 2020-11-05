import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/details/:id" exact component={Details}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
