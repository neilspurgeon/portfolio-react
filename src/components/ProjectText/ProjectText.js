import React from 'react';
import styles from './style.css';
// import RevealImage from 'components/RevealImage/RevealImage.js';
import transitions from 'sharedStyles/transitions.css';
// import Container from 'components/Container/Container.js';

const ProjectText = (props) => {
  return (
    <div className={styles.textWrapper}>
      {props.children}
    </div>
  );
};

export default ProjectText;