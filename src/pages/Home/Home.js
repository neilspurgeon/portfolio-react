import React from 'react';
import { Link } from 'react-router-dom';
import Grid from 'components/Grid/Grid.js';
import Nav from 'components/Nav/Nav.js';
import Footer from 'components/Footer/Footer.js';
import styles from './styles.css';
import sharedStyles from 'sharedStyles/index.css';
import projects from 'projects';
import ProjectCard from 'components/ProjectCard/ProjectCard.js';

const Home = () => {
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
              if (i % 2 !== 0) {
                return (
                  <ProjectCard
                    path={project.data.path}
                    image={project.data.card}
                    altText={project.data.title}
                    title={project.data.title}
                    subTitle={project.data.subTitle}
                  />
                );
              }
            })}
          </div>

          <div className={styles.rightCol}>
            {projects.map((project, i) => {
              if (i % 2 === 0) {
                return (
                  <ProjectCard
                    path={project.data.path}
                    image={project.data.card}
                    altText={project.data.title}
                    title={project.data.title}
                    subTitle={project.data.subTitle}
                  />
                );
              }
            })}
          </div>


        </section>

      </Grid>
      <Footer />
    </div>
  );
};

export default Home;
