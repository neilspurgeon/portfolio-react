import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.css';
import Image from 'components/Image/Image.js';

const ProjectCard = (props) => {
  return (
    <Link className={[styles.card, props.className].join(' ')} to={props.path}>
      <div className={styles.imageWrapper} data-projectcard>
        {/* <ImagesDistortion className={styles.image} image={props.image} sizes={props.sizes} altText={props.altText} /> */}
        <Image className={styles.image} image={props.image} sizes={props.sizes} altText={props.altText} />
      </div>
      <div className={styles.info}>

        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{props.title}</h2>
        </div>

        <div className={styles.subTitleWrapper}>
          <p className={styles.subTitle}>{props.subTitle}</p>
        </div>

      </div>
    </Link>
  );
};

export default ProjectCard;