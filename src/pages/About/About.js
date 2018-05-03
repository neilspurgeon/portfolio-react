import React from 'react';
import Container from 'components/Container/Container.js';
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import styles from './styles.css';
import shared from 'sharedStyles/index.css';
import portrait from './profile.jpg';
import Image from 'components/Image/Image.js';
import Playlist from 'components/Playlist/Playlist.js';
import { Helmet } from 'react-helmet';

const headingClass = [shared.h3, styles.aboutSectionHeader].join(' ');

const About = () => {
  return (
    <div>

      <Helmet>
        <title>About – Neil Spurgeon. Product Designer</title>
      </Helmet>

      <Header />

      <Container type="inset">
        <header className={styles.header}>
          <Image
            className={styles.headerImage}
            image={portrait}
            altText="portrait of me"
            sizes="100vw, 50vw"
          />

          <div className={styles.headerText}>
            <p className={shared.h2}>I'm a designer currently based in San Luis Obispo, California. For the past few years, I've focused mainly on web and mobile app design, while also taking great interest in front-end web development.</p>
            <p className={shared.h2}>I'm currently looking for a full-time position that focuses on design, but ideally allows opportunities to code as well.</p>
          </div>

        </header>


        <section className={styles.aboutSection}>
          <h2 className={headingClass}>Experience</h2>

          <div className={styles.aboutSectionContent}>
            <p>Hathway — San Luis Obispo, CA<br />
              <span>Senior Designer, Jan. 2017 - Feb. 2018</span><br />
              <span>Visual Designer, Sep. 2015 - Dec. 2016</span>
            </p>
            <p>Indicate Design Groupe — San Francisco, CA<br />
              <span>Designer, April. 2014 - April. 2015</span>
            </p>
          </div>
        </section>


        <section className={styles.aboutSection}>
          <h2 className={headingClass}>Education</h2>

          <div className={styles.aboutSectionContent}>
            <p>California Polytechnic State University — San Luis Obispo, CA<br />
              <span>BFA Art & Design; Graphic Design Concentration</span>
            </p>

            <p>General Assembly — San Francisco, CA <br />
              <span>Web Development Immersive</span>
            </p>
          </div>
        </section>


        <section className={styles.aboutSection}>
          <h2 className={headingClass}>Interests</h2>

          <div className={styles.aboutSectionContent}>
            <p>Outside of design, I love music and you can often find me at shows. I also really like spending time outdoors, whether that be surfing, camping, hiking, or anything else adventurous.</p>
          </div>
        </section>


        <section className={styles.aboutSection}>
          <h2 className={headingClass}>Listening To</h2>

          <div className={styles.aboutSectionContent}>

          {/* wrap playlist in P tags to give same spacing */}
          <p>
            <Playlist className={styles.playlist} />
          </p>

          </div>
        </section>


      </Container>

      <Footer />

    </div>
  );
};

export default About;