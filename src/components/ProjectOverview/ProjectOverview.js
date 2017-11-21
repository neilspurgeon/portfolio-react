import React from 'react';
import Grid from 'components/Grid/Grid.js';
import styles from './style.css';
import RevealImage from 'components/RevealImage/RevealImage.js';
import transitions from 'sharedStyles/transitions.css';
import sharedStyles from 'sharedStyles/index.css';

const ProjectOverview = (props) => {
  return (
    <Grid>
      <RevealImage
        className={styles.wrapper}
        revealClass={transitions.fadeUpReveal}
        inViewClass={transitions.inView}
        >
        {props.children}
        <a target="_blank" href={props.linkUrl} className={[sharedStyles.arrowLink, styles.projectLink].join(' ')}>{props.linkText}</a>
      </RevealImage>
    </Grid>
  );
};

export default ProjectOverview;