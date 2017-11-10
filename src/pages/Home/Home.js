import React from 'react';
import { Link } from 'react-router-dom';
import Grid from 'components/Grid/Grid.js';
import Nav from 'components/Nav/Nav.js';
import Footer from 'components/Footer/Footer.js';
import styles from './styles.css';
import sharedStyles from 'sharedStyles/index.css';
import projects from 'projects';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };


  render() {
    let width = this.state.width;

    if (width >= 1200) {
      return (
        <div>
          <Nav />
          <Grid>

            <header className={styles.intro}>
              <h1 className={styles.introText}>I’m Neil, a digital product  designer & frontend developer.</h1>
              <Link className={sharedStyles.arrowLink} to='/about'>Learn More</Link>
            </header>

            <section className={styles.projects}>
              <div className={styles.leftCol}>
                {projects.map((project, i) => {
                  // dont render every other item
                  if (i % 2 !== 0) {
                    return (
                      <Link className={styles.card} to={project.data.path}>
                        <div className={styles.imageWrapper}>
                          <img className={styles.image} src={project.data.card} alt={project.data.title} />
                        </div>
                        <h2 className={styles.title}>{project.data.title}</h2>
                        <p className={styles.subTitle}>{project.data.subTitle}</p>
                      </Link>
                    );
                  }
                })}
              </div>

              <div className={styles.rightCol}>
                {projects.map((project, i) => {
                  // dont render every other item
                  if (i % 2 === 0) {
                    return (
                      <Link className={styles.card} to={project.data.path}>
                        <div className={styles.imageWrapper}>
                          <img className={styles.image} src={project.data.card} alt={project.data.title} />
                        </div>
                        <h2 className={styles.title}>{project.data.title}</h2>
                        <p className={styles.subTitle}>{project.data.subTitle}</p>
                      </Link>
                    );
                  }
                })}
              </div>

            </section>

          </Grid>
          <Footer />
        </div>
      );
    }

    return (
      <div>
        <Nav />
        <Grid>

          <header className={styles.intro}>
            <h1 className={styles.introText}>I’m Neil, a digital product  designer & frontend developer.</h1>
            <Link className={sharedStyles.arrowLink} to='/about'>Learn More</Link>
          </header>

          <section className={styles.projects}>
            {projects.map((project, i) => {
              return (
                <Link className={styles.card} to={project.data.path}>
                  <div className={styles.imageWrapper}>
                    <img className={styles.image} src={project.data.card} alt={project.data.title} />
                  </div>
                  <h2 className={styles.title}>{project.data.title}</h2>
                  <p className={styles.subTitle}>{project.data.subTitle}</p>
                </Link>
              );
            })}
          </section>

        </Grid>
        <Footer />
      </div>
    );

  };

};

export default Home;
