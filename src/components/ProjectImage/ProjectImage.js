import React from 'react';
import Grid from 'components/Grid/Grid.js';
import RevealImage from 'components/RevealImage/RevealImage.js';
import styles from './style.css';
import Image from 'components/Image/Image.js';

const ProjectImage = (props) => {

  if (props.layout === 'twoUpLeftBleed') return (
    <Grid>
      <RevealImage className={styles.imageWrapper}>
        <div className={styles.twoUpLeftBleed}>
          <Image className={styles.twoUpLeft} image={props.images[0].image} altText={props.images[0].altText} />
          <Image className={styles.twoUpRight} image={props.images[1].image} altText={props.images[1].altText} />
        </div>
      </RevealImage>
    </Grid>
  );

  if (props.layout === 'bleedBottom') return (
    <Grid>
      <RevealImage className={styles.imageWrapper}>
        <div className={styles.bleedBottom}>
          <Image image={props.images[0].image} altText={props.images[0].altText} />
        </div>
      </RevealImage>
    </Grid>
  );

  return (
    <Grid>
      <RevealImage className={styles.imageWrapper}>
        <Image image={props.images[0].image} altText={props.images[0].altText} />
      </RevealImage>
    </Grid>
  );
};

export default ProjectImage;