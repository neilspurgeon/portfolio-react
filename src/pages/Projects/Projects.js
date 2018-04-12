import React from 'react';
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import styles from './styles.css';
import projects from 'projects';
import ProjectCard from 'components/ProjectCard/ProjectCard.js';
import Container from 'components/Container/Container.js';
import { Helmet } from 'react-helmet';

const Projects = () => {
  return (
    <div>

      <Helmet>
        <title>Projects – Neil Spurgeon. Designer & Developer</title>
      </Helmet>

      <Header />


      <Container type={'inset'}>

        <section className={styles.projects}>

          {projects.map((project, i) => {
            return (
              <ProjectCard
                key={project.data.title}
                className={styles.card}
                path={project.data.path}
                image={project.data.homeCard}
                sizes="(max-width: 751px) 100vw, 40vw"
                altText={project.data.title}
                title={project.data.title}
                subTitle={project.data.subTitle}
              />
            );
          })}

        </section>

      </Container>


      <Footer />
    </div>
  );
};

export default Projects;
