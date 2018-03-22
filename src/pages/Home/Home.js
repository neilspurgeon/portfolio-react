import React from 'react';
import Container from 'components/Container/Container.js';
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import styles from './styles.css';
import projects from 'projects';
import ProjectCard from 'components/ProjectCard/ProjectCard.js';
import Cta from 'components/Cta/Cta.js';
import { Helmet } from 'react-helmet';
import TextDistortion from 'components/TextDistortion/TextDistortion.js';

const Home = (props) => {
    return (
      <div>

        <Helmet>
          <title>Home – Neil Spurgeon. Designer & Developer</title>
        </Helmet>

        <Header />

        <Container type={'inset'}>

          <section className={styles.intro}>

            <TextDistortion className={styles.distortedText} />

            <div className={styles.introText}>
              <h1>Neil is a California based designer who likes to code. He is currently looking for full-time career opportunities.</h1>
            </div>

            <div className={styles.scrollIndicator}>
              <div className={styles.mouseIcon}>
                <span className={styles.mouseScroll}></span>
              </div>
            </div>

          </section>

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

          <div className={styles.viewAll}>
            <Cta text="View All" to="/projects" />
          </div>

        </Container>

        <Footer />
      </div>
    );
};

export default Home;
