import React from 'react';
import Grid from 'components/Grid/Grid.js';
import {NavLink } from 'react-router-dom';
import styles from './style.css';

const Nav = () => {
  return (
    <div>
      <nav className={styles.navWrapper}>

        <NavLink
          exact
          activeStyle={{textDecoration: 'underline'}}
          className={styles.navLink}
          to={'/'}>
          Home
        </NavLink>

        <NavLink
          exact
          activeStyle={{textDecoration: 'underline'}}
          className={styles.navLink}
          to={'/'}>
          About
        </NavLink>

      </nav>
      <div className={styles.aside}>
        <span>
          — Neil Spurgeon
        </span>
      </div>
    </div>

  );
};

export default Nav;