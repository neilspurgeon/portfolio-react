import React from 'react';
import Grid from 'components/Grid/Grid.js';
import RevealImage from 'components/RevealImage/RevealImage.js';
import styles from './style.css';

const ProjectHero = (props) => {
  return (
    <Grid>
      <RevealImage className={styles.wrapper}>
        <img className={styles.image} src={props.image} alt={props.altText} />
      </RevealImage>
    </Grid>
  );
};

export default ProjectHero;