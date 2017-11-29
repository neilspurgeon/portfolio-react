import React from 'react';
import Grid from 'components/Grid/Grid.js';
import Image from 'components/Image/Image.js';
import styles from './style.css';

const ProjectHero = (props) => {
  return (
    <Grid>
      <span className={styles.wrapper}>
      <Image
        image={props.image}
        altText={props.altText}
      />
      </span>
    </Grid>
  );
};

export default ProjectHero;