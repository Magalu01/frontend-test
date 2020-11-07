import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/details/:id" component={Details}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
