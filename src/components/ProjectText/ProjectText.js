import React from 'react';
import styles from './style.css';

const ProjectText = (props) => {
  return (
    <div className={styles.textWrapper}>
      {props.children}
    </div>
  );
};

export default ProjectText;