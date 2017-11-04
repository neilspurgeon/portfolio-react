import React from 'react';
import Grid from 'components/Grid/Grid.js';
import styles from './style.css';

const ProjectText = (props) => {
  return (
    <Grid>
      <div className={styles.wrapper}>
        {props.children}
      </div>
    </Grid>
  );
};

export default ProjectText;