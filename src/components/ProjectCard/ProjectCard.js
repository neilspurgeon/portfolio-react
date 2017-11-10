import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.css';

const ProjectCard = (props) => {
  return (
    <Link className={styles.card} to={props.path}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={props.image} alt={props.altText} />
      </div>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.subTitle}>{props.subTitle}</p>
    </Link>
  );
};

export default ProjectCard;