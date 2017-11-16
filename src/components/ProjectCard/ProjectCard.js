import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.css';
import Image from 'components/Image/Image.js';

const ProjectCard = (props) => {
  return (
    <Link className={[styles.card, props.className].join(' ')} to={props.path}>
      <div className={styles.imageWrapper}>
        <Image className={styles.image} image={props.image} altText={props.altText} />
      </div>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.subTitle}>{props.subTitle}</p>
    </Link>
  );
};

export default ProjectCard;