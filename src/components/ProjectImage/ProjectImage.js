import React from 'react';
import RevealImage from 'components/RevealImage/RevealImage.js';
import styles from './style.css';
import Image from 'components/Image/Image.js';

const ProjectImage = (props) => {

  if (props.layout === 'twoUpLeftBleed') return (
    <RevealImage className={styles.imageWrapper}>
      <div className={styles.twoUpLeftBleed} style={props.backgroundStyle}>
        <Image className={[styles.twoUpLeft, styles.image].join(' ')} image={props.images[0].image} altText={props.images[0].altText} />
        <Image className={[styles.twoUpRight, styles.image].join(' ')} image={props.images[1].image} altText={props.images[1].altText} />
      </div>
    </RevealImage>
  );

  if (props.layout === 'twoUp') return (
    <RevealImage className={styles.imageWrapper}>
      <div className={styles.twoUp} style={props.backgroundStyle}>
        <Image className={[styles.twoUpImg, styles.image].join(' ')} image={props.images[0].image} altText={props.images[0].altText} />
        <Image className={[styles.twoUpImg, styles.image].join(' ')} image={props.images[1].image} altText={props.images[1].altText} />
      </div>
    </RevealImage>
  );

  if (props.layout === 'bleedBottom') return (
    <RevealImage className={styles.imageWrapper}>
      <div className={styles.bleedBottom} style={props.backgroundStyle}>
        <Image className={styles.image}image={props.images[0].image} altText={props.images[0].altText} />
      </div>
    </RevealImage>
  );

  if (props.layout === 'twoUpBleedBottom') {

    const widthStyle = props.width && {
        width: props.width
    };

    return (
      <RevealImage className={styles.imageWrapper}>
        <div className={styles.twoUpBleedBottom} style={props.backgroundStyle}>
          <Image className={[styles.twoUpLeft, styles.image].join(' ')} style={widthStyle} image={props.images[0].image} altText={props.images[0].altText} />
          <Image className={[styles.twoUpRight, styles.image].join(' ')} style={widthStyle} image={props.images[1].image} altText={props.images[1].altText} />
        </div>
      </RevealImage>
    );
  }

  if (props.layout === 'twoUpStacked') {

    return (
      <RevealImage className={styles.imageWrapper}>
        <div className={styles.twoUpStacked} style={props.backgroundStyle}>
          <Image className={[styles.twoUpStackedTop, styles.image].join(' ')} image={props.images[0].image} altText={props.images[0].altText} />
          <Image className={[styles.twoUpStackedBottom, styles.image].join(' ')} image={props.images[1].image} altText={props.images[1].altText} />
        </div>
      </RevealImage>
    );
  }

  if (props.layout === 'threeUpMobile') return (
    <RevealImage className={styles.imageWrapper}>
      <div className={styles.threeUpMobile} style={props.backgroundStyle}>
        { props.images.map((project) => {
          return <Image className={[styles.threeUpMobileImage, styles.image].join(' ')} image={project.image} altText={project.altText} />;
        })}
      </div>
    </RevealImage>
  );

  if (props.layout === 'fullBleed') return (
    <RevealImage className={styles.imageWrapper} style={props.backgroundStyle}>
      <div className={styles.fullBleed}>
        <Image className={styles.image} image={props.images[0].image} altText={props.images[0].altText} />
      </div>
    </RevealImage>
  );


  return (
    <RevealImage className={styles.imageWrapper} style={props.backgroundStyle}>
      <div className={styles.pad} style={props.backgroundStyle}>
        <Image className={styles.image} image={props.images[0].image} altText={props.images[0].altText} />
      </div>
    </RevealImage>
  );
};

export default ProjectImage;