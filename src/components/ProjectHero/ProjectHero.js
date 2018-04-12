import React from 'react';
import Image from 'components/Image/Image.js';
import styles from './style.css';

const ProjectHero = (props) => {
  return (
    <div className={styles.wrapper}>
      <Image
        image={props.image}
        altText={props.altText}
      />
    </div>
  );
};

export default ProjectHero;