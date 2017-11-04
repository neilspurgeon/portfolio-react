import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home/Home.js';
import CoffeeBean from 'projects/CoffeBeanEcomerce/CoffeBeanEcomerce.js';
import NotFound from 'pages/NotFound/NotFound.js';
import styles from 'index.css';

const Routes = (props) => (
  <div className={styles.grid}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/coffeebeanecommerce" component={CoffeeBean} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Routes;