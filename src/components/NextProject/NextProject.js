import React from 'react';
import Grid from 'components/Grid/Grid.js';
import styles from './style.css';

const NextProject = (props) => {
  return (
    <Grid>
      <div className={styles.wrapper}>

        <span class={styles.divider} />

        <img
          class={styles.nextImage}
          src={props.img || "http://neilspurgeon.com/assets/images/resized/2800/juniper-ridge-hero.jpg"}
          alt={props.altText}
        />

      <div className={styles.nextTextWrapper}>
          <h2 className={styles.nextText}><span class={styles.label}>Next Project</span> <br />
          <a className={styles.nextLink} href="www.google.com">{props.nextLink || 'Project Name'}</a></h2>
        </div>

      </div>

    </Grid>
  );
};

export default NextProject;