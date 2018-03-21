import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'components/Container/Container.js';
import styles from './style.css';
import globalStyles from 'sharedStyles/index.css';
import Waypoint from 'react-waypoint';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      footerClasses: [
        styles.footer
      ]
    };
  };

  handleEnter = () => {
    this.setState({
      footerClasses: [
        styles.footer,
        styles.inView
      ]
    });
  };

  render() {
    return (
      <Waypoint bottomOffset="10%" onEnter={this.handleEnter}>
        <footer className={this.state.footerClasses.join(' ')}>

          <Container>

            <div className={styles.footerContainer}>

              <ul className={[styles.list, styles.contact].join(' ')}>
                <li><a className={styles.footerLink} href="mailto:hello@neilspurgeon.com">hello@neilspurgeon.com</a></li>
                <li><a className={styles.footerLink} href="tel:1-805-748-3201">805 748 3201</a></li>
              </ul>

              <ul className={[styles.list, styles.social].join(' ')}>
                <li><a className={styles.footerLink} target="_blank" rel='noopener noreferrer' href="https://www.linkedin.com/in/neilspurgeon/">LinkedIn</a></li>
                <li><a className={styles.footerLink} target="_blank" rel='noopener noreferrer' href="https://github.com/neilspurgeon/">GitHub</a><br /></li>
                <li><a className={styles.footerLink} target="_blank" rel='noopener noreferrer' href="https://dribbble.com/neilspurgeon/">Dribbble</a><br /></li>
              </ul>

              <nav className={styles.nav}>
                <ul className={[styles.list]}>

                  <li><NavLink
                    exact
                    className={styles.navLink}
                    activeClassName={styles.isActive}
                    to={'/projects'}>
                    Projects
                  </NavLink></li>

                  <li><NavLink
                    exact
                    className={styles.navLink}
                    activeClassName={styles.isActive}
                    to={'/about'}>
                    About
                  </NavLink></li>

                  <li><NavLink
                    exact
                    className={styles.navLink}
                    activeClassName={styles.isActive}
                    to={'/contact'}>
                    Contact
                  </NavLink></li>

                </ul>
              </nav>


            </div>

          </Container>

        </footer>
      </Waypoint>
    );
  }
};

export default Footer;