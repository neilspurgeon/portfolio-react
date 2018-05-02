import React from 'react';
import Container from 'components/Container/Container.js';
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import styles from './styles.css';
import projects from 'projects';
import ProjectCard from 'components/ProjectCard/ProjectCard.js';
import Cta from 'components/Cta/Cta.js';
import { Helmet } from 'react-helmet';

// Only show first 4 projects on home page
const featuredProjects = projects.slice(0, 4);

const Home = (props) => {
    return (
      <div>

        <Helmet>
          <title>Home – Neil Spurgeon. Product Designer</title>
        </Helmet>

        <Header />

        <Container type={'inset'}>

          <section className={styles.intro}>

            <div className={styles.introText}>
              <h1>Hi, I’m Neil, a multidisciplinary designer who likes to code. I’m currently available for freelance and full-time opportunities.</h1>
            </div>

            <div className={styles.scrollIndicator}>
              <div className={styles.mouseIcon}>
                <span className={styles.mouseScroll}></span>
              </div>
            </div>

          </section>

          <section className={styles.projects}>

            {featuredProjects.map((project, i) => {
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

          <div className={styles.viewAll}>
            <Cta text="View All" to="/projects" />
          </div>

        </Container>

        <Footer />
      </div>
    );
};

export default Home;
