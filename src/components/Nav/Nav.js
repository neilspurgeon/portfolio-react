import React from 'react';
import {NavLink } from 'react-router-dom';
import styles from './style.css';
import { withRouter } from 'react-router-dom';

const Nav = (props) => {
  let workActiveClass = (window.location.href.indexOf("work") > -1) ? styles.isActive : null;
  let defaultAsideClass = !props.showScrolledAside ? [styles.aside, styles.isVisible] : [styles.aside];
  let scrolledAsideClass = props.showScrolledAside ? [styles.projectAside, styles.isVisible] : [styles.projectAside];

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
      <div className={defaultAsideClass.join(' ')}>
        — Neil Spurgeon
      </div>

      <div className={scrolledAsideClass.join(' ')}>
        {props.asideText}
      </div>

    </div>

  );
};

export default withRouter(Nav);