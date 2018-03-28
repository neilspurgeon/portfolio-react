import React from 'react';
// import Grid from 'components/Grid/Grid.js';
import Container from 'components/Container/Container.js';
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import styles from './styles.css';
import shared from 'sharedStyles/index.css';
import portrait from './portrait.jpg';
import Image from 'components/Image/Image.js';
import Playlist from 'components/Playlist/Playlist.js';
import { Helmet } from 'react-helmet';

const headingClass = [shared.sectionHeader, styles.aboutHeader].join(' ');

const About = () => {
  return (
    <div>

      <Helmet>
        <title>About – Neil Spurgeon. Designer & Developer</title>
      </Helmet>

      <Header />

      <Container>
        <div className={styles.pageWrapper}>
          <Image
            className={styles.portrait}
            image={portrait}
            altText="portrait of me"
            sizes="(max-width: 751px) 100vw, 25vw"
          />

          <div className={styles.text}>
            <p className={shared.h2}>I'm a designer currently based in San Luis Obispo, California. For the past few years, I've focused on mainly on web and mobile app design, while also taking great interest in front-end web development.</p>

            <p className={shared.h2}>I'm currently looking for a full-time position that focuses on design, but ideally allows opportunities to code as well.</p>

            <div className={styles.body}>
              <h2 className={headingClass}>Experience</h2>
              <p>Hathway — San Luis Obispo, CA<br />
                <span>Senior Designer, Jan. 2017 - Feb. 2018</span><br />
                <span>Visual Designer, Sep. 2015 - Dec. 2016</span>
              </p>
              <p>Indicate Design Groupe — San Francisco, CA<br />
                <span>Designer, April. 2014 - April. 2015</span>
              </p>

              <h2 className={headingClass}>Education</h2>
              <p>California Polytechnic State University — San Luis Obispo, CA<br />
                <span>BFA Art & Design; Graphic Design Concentration</span>
              </p>
              <p>General Assembly — San Francisco, CA <br />
                <span>Web Development Immersive</span>
              </p>

              <h2 className={headingClass}>Interests</h2>
              <p>Outside of design, I love music and you can often find me at shows. I also really like spending time outdoors, whether that be surfing, camping, hiking, or anything else adventurous.<br /></p>

              <h2 className={headingClass}>Currently Listening To</h2>
              <Playlist />
            </div>

          </div>

        </div>
      </Container>

      {/* <Container type="inset">

        <main className={styles.text}>

          <section className={styles.textSection}>

            <h2 className={shared.sectionHeader}>Experience</h2>
            <p>Hathway — San Luis Obispo, CA<br />
              <span>Senior Designer, Jan. 2017 - Feb. 2018</span><br />
              <span>Visual Designer, Sep. 2015 - Dec. 2016</span>
            </p>
            <p>Indicate Design Groupe — San Francisco, CA<br />
              <span>Designer, April. 2014 - April. 2015</span>
            </p>

            <h2 className={shared.sectionHeader}>Education</h2>
            <p>California Polytechnic State University — San Luis Obispo, CA<br />
              <span>BFA Art & Design; Graphic Design Concentration</span>
            </p>
            <p>General Assembly — San Francisco, CA <br />
              <span>Web Development Immersive</span>
            </p>

            <h2 className={shared.sectionHeader}>Interests</h2>
            <p>Outside of design, I love music and you can often find me at shows. I also really like spending time outdoors, whether that be surfing, camping, hiking, or anything else adventurous.<br /></p>

            <h2 className={shared.sectionHeader}>Currently Listening To</h2>
            <Playlist />

          </section>

        </main>

      </Container> */}

      <Footer />
    </div>
  );
};

export default About;
