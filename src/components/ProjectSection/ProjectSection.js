import React from 'react';
import styles from './style.css';
// import RevealImage from 'components/RevealImage/RevealImage.js';
import transitions from 'sharedStyles/transitions.css';
// import Container from 'components/Container/Container.js';

const ProjectSection = (props) => {
  return (
    <div className={styles.wrapper}>
      {props.children}
    </div>
  );
};

export default ProjectSection;