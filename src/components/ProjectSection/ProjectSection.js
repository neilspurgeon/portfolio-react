import React from 'react';
import styles from './style.css';

const ProjectSection = (props) => {
  return (
    <div className={styles.wrapper}>
      {props.children}
    </div>
  );
};

export default ProjectSection;