import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'components/Container/Container.js';
import styles from './style.css';
import Link from 'components/Link/Link.js';

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
      <footer className={this.state.footerClasses.join(' ')} data-dark>

        <Container type="inset">

          <div className={styles.footerContainer}>

            <ul className={[styles.list, styles.contact].join(' ')}>
              <li><Link to="mailto:hello@neilspurgeon.com" text="hello@neilspurgeon.com" /></li>
              <li><Link to="tel:1-805-748-3201" text="805 748 3201" /></li>
            </ul>

            <ul className={[styles.list, styles.social].join(' ')}>
              <li><Link to="https://www.linkedin.com/in/neilspurgeon/" text="" /></li>
              <li><Link to="https://github.com/neilspurgeon/" text="GitHub" /></li>
              <li><Link to="https://dribbble.com/neilspurgeon/" text="Dribbble" /></li>
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
    );
  }
};

export default Footer;