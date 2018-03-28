import React from 'react';
// import Grid from 'components/Grid/Grid.js';
import Container from 'components/Container/Container.js';
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import styles from './styles.css';
import sharedStyles from 'sharedStyles/index.css';
import portrait from './portrait.jpg';
import Image from 'components/Image/Image.js';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div>

      <Helmet>
        <title>About – Neil Spurgeon. Designer & Developer</title>
      </Helmet>

      <Header />

      <Container>
          <Image
            className={styles.portrait}
            image={portrait}
            altText="portrait of me"
            sizes="(max-width: 751px) 100vw, 25vw"
          />
      </Container>

      <Container type="">

        <main className={styles.text}>

          <section className={styles.textSection}>
            <p className={styles.intro}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. </p>
            <p className={styles.intro}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h2 className={[sharedStyles.p, styles.sectionLabel].join(' ')}>Experience</h2>
            <p>Hathway — San Luis Obispo, CA<br />
              <span>Senior Designer, Jan. 2017 - Now</span><br />
              <span>Visual Designer, Sep. 2015 - Dec. 2016</span>
            </p>
            <p>Indicate Design Groupe — San Francisco, CA<br />
              <span>Designer, April. 2014 - April. 2015</span>
            </p>

            <h2 className={[sharedStyles.p, styles.sectionLabel].join(' ')}>Education</h2>
            <p>California Polytechnic State University — San Luis Obispo, CA<br />
              <span>BFA Art & Design; Graphic Design Concentration</span>
            </p>
            <p>General Assembly  — San Francisco, CA <br />
              <span>Web Development Immersive</span>
            </p>

            <h2 className={[sharedStyles.p, styles.sectionLabel].join(' ')}>Colophon</h2>
            <p>This site is built with Create React App and is hosted on Surge.sh. View the code <a className={sharedStyles.inlineLink} target="_blank" rel="noopener noreferrer" href="https://github.com/neilspurgeon/portfolio-react">here</a></p>
          </section>

        </main>

      </Container>

      <Footer />
    </div>
  );
};

export default About;
