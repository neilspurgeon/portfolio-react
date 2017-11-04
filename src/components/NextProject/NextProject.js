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

        <div className={styles.nextLink}>
          NextProject
        </div>

      </div>

    </Grid>
  );
};

export default NextProject;