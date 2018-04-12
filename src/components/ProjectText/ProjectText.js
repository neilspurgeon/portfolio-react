import React from 'react';
import styles from './style.css';
import Container from 'components/Container/Container.js';

const ProjectText = (props) => {
  return (
    <Container>
      <div className={styles.textWrapper}>
        {props.children}
      </div>
    </Container>
  );
};

export default ProjectText;