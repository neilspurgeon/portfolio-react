import React from 'react';
import {NavLink } from 'react-router-dom';
import styles from './style.css';
import { withRouter } from 'react-router-dom';

const Nav = () => {
  let workActiveClass = (window.location.href.indexOf("work") > -1) ? styles.isActive : null;

  return (
    <div>
      <nav className={styles.navWrapper}>

        <NavLink
          exact
          className={[styles.navLink, workActiveClass].join(' ')}
          activeClassName={styles.isActive}
          to={'/'}>
          Work
        </NavLink>

        <NavLink
          exact
          className={styles.navLink}
          activeClassName={styles.isActive}
          to={'/about'}>
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

export default withRouter(Nav);