import React from 'react';
import { Link } from 'react-router-dom';
import Grid from 'components/Grid/Grid.js';
import Nav from 'components/Nav/Nav.js';
import Footer from 'components/Footer/Footer.js';
import styles from './styles.css';
import projects from 'projects';

const Home = () => {
  return (
    <div>
      <Nav />

      <Grid>
        <header className={styles.intro}>
          <h1 className={styles.introText}>I’m Neil, a digital product  designer & frontend developer.</h1>
        </header>

        <section className={styles.projects}>
          {projects.map((project) => {
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

export default Home;
