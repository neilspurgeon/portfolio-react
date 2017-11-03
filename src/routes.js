import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import NotFound from './pages/NotFound/NotFound.js';

const Routes = (props) => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Routes;