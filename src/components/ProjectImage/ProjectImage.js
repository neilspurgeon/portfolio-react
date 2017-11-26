import React from 'react';
import Grid from 'components/Grid/Grid.js';
import RevealImage from 'components/RevealImage/RevealImage.js';
import styles from './style.css';
import Image from 'components/Image/Image.js';

const ProjectImage = (props) => {

  if (props.layout === 'twoUpLeftBleed') return (
    <Grid>
      <RevealImage className={styles.imageWrapper}>
        <div className={styles.twoUpLeftBleed} style={props.backgroundStyle}>
          <Image className={styles.twoUpLeft} image={props.images[0].image} altText={props.images[0].altText} />
          <Image className={styles.twoUpRight} image={props.images[1].image} altText={props.images[1].altText} />
        </div>
      </RevealImage>
    </Grid>
  );

  if (props.layout === 'twoUp') return (
    <Grid>
      <RevealImage className={styles.imageWrapper}>
        <div className={styles.twoUp} style={props.backgroundStyle}>
          <Image className={styles.twoUpImg} image={props.images[0].image} altText={props.images[0].altText} />
          <Image className={styles.twoUpImg} image={props.images[1].image} altText={props.images[1].altText} />
        </div>
      </RevealImage>
    </Grid>
  );

  if (props.layout === 'bleedBottom') return (
    <Grid>
      <RevealImage className={styles.imageWrapper}>
        <div className={styles.bleedBottom} style={props.backgroundStyle}>
          <Image image={props.images[0].image} altText={props.images[0].altText} />
        </div>
      </RevealImage>
    </Grid>
  );

  if (props.layout === 'twoUpBleedBottom') {

    const widthStyle = props.width && {
        width: props.width
    };

    return (
      <Grid>
        <RevealImage className={styles.imageWrapper}>
          <div className={styles.twoUpBleedBottom} style={props.backgroundStyle}>
            <Image className={styles.twoUpLeft} style={widthStyle} image={props.images[0].image} altText={props.images[0].altText} />
            <Image className={styles.twoUpRight} style={widthStyle} image={props.images[1].image} altText={props.images[1].altText} />
          </div>
        </RevealImage>
      </Grid>
    );
  }

  if (props.layout === 'twoUpStacked') {

    return (
      <Grid>
        <RevealImage className={styles.imageWrapper}>
          <div className={styles.twoUpStacked} style={props.backgroundStyle}>
            <Image className={styles.twoUpStackedTop} image={props.images[0].image} altText={props.images[0].altText} />
            <Image className={styles.twoUpStackedBottom} image={props.images[1].image} altText={props.images[1].altText} />
          </div>
        </RevealImage>
      </Grid>
    );
  }

  if (props.layout === 'threeUpMobile') return (
    <Grid>
      <RevealImage className={styles.imageWrapper}>
        <div className={styles.threeUpMobile} style={props.backgroundStyle}>
          { props.images.map((project) => {
            return <Image className={styles.threeUpMobileImage} image={project.image} altText={project.altText} />;
          })}
        </div>
      </RevealImage>
    </Grid>
  );

  if (props.layout === 'fullBleed') return (
    <Grid>
      <RevealImage className={styles.imageWrapper} style={props.backgroundStyle}>
        <div className={styles.fullBleed}>
          <Image image={props.images[0].image} altText={props.images[0].altText} />
        </div>
      </RevealImage>
    </Grid>
  );


  return (
    <Grid>
      <RevealImage className={styles.imageWrapper} style={props.backgroundStyle}>
        <div className={styles.pad} style={props.backgroundStyle}>
          <Image image={props.images[0].image} altText={props.images[0].altText} />
        </div>
      </RevealImage>
    </Grid>
  );
};

export default ProjectImage;