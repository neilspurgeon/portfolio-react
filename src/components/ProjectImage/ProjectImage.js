import React from 'react';
import Grid from 'components/Grid/Grid.js';
import styles from './style.css';

const ProjectImage = (props) => {
  return (
    <Grid>
      <div className={styles.wrapper}>
        <img className={styles.image} src={props.image} alt={props.altText} />
      </div>
    </Grid>
  );
};

export default ProjectImage;