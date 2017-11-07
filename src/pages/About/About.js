import React from 'react';
import Grid from 'components/Grid/Grid.js';
import Nav from 'components/Nav/Nav.js';
import Footer from 'components/Footer/Footer.js';
import styles from './styles.css';
import index from 'sharedStyles/index.css';
import portrait from './portrait.jpg';

const About = () => {
  return (
    <div>
      <Nav />

      <Grid>

        <img src={portrait} alt="portrait of me" className={styles.portrait}/>

        <main className={styles.wrapper}>

          <section className={styles.textSection}>
            <h1 className={[index.p, styles.sectionLabel].join(' ')}>About</h1>
            <p>I’m a designer and developer based in San Luis Obispo, CA. I have a wide range of experience but specialize in digital product design and front end development.</p>
            <p>I’m currently available for freelance work and interesting projects.</p>
            <p>Please get in touch at <a href="mailto:hello@neilspurgeon.com">hello@neilspurgeon.com</a></p>

            <h2 className={[index.p, styles.sectionLabel].join(' ')}>Experience</h2>
            <p>Hathway — San Luis Obispo, CA<br />
              <span>Senior Designer, Jan. 2017 - Now</span><br />
              <span>Visual Designer, Sep. 2015 - Dec. 2016</span>
            </p>
            <p>Indicate Design Groupe — San Francisco, CA<br />
              <span>Designer, April. 2014 - April. 2015</span>
            </p>

            <h2 className={[index.p, styles.sectionLabel].join(' ')}>Education</h2>
            <p>California Polytechnic State University — San Luis Obispo, CA<br />
              <span>BFA Art & Design; Graphic Design Concentration</span>
            </p>
            <p>General Assembly  — San Francisco, CA <br />
              <span>Web Development Immersive</span>
            </p>

            <h2 className={[index.p, styles.sectionLabel].join(' ')}>Colophon</h2>
            <p>Lorem Ipsum</p>
          </section>

        </main>

      </Grid>

      <Footer />
    </div>
  );
};

export default About;
