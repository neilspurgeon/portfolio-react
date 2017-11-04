import React from 'react';
import Grid from 'components/Grid/Grid.js';
import styles from './style.css';

const ProjectHeader = (props) => {
  return (
    <Grid>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.subTitle}>{props.subTitle}</p>
      </div>
    </Grid>
  );
};

export default ProjectHeader;