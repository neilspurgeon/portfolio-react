import React from 'react';
import Grid from 'components/Grid/Grid.js';
import RevealImage from 'components/RevealImage/RevealImage.js';
import styles from './style.css';

const ProjectImage = (props) => {
  return (
    <Grid>
      <RevealImage className={styles.imageWrapper}>
        <img className={styles.image} src={props.image} alt={props.altText} />
      </RevealImage>
    </Grid>
  );
};

export default ProjectImage;