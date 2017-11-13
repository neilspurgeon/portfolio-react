import React from 'react';
import Grid from 'components/Grid/Grid.js';
import styles from './style.css';
import RevealImage from 'components/RevealImage/RevealImage.js';
import transitions from 'sharedStyles/transitions.css';

const ProjectText = (props) => {
  return (
    <Grid>
      <RevealImage
        className={styles.wrapper}
        revealClass={transitions.fadeUpReveal}
        inViewClass={transitions.inView}
        >
        {props.children}
      </RevealImage>
    </Grid>
  );
};

export default ProjectText;