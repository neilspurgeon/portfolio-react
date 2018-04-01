import React from 'react';
import styles from './style.css';
import Container from 'components/Container/Container.js';

const ProjectHeader = (props) => {
  return (
      <Container className={styles.projectHeader}>

        <h1 className={styles.title}>
          {props.title}
        </h1>

      </Container>
  );
};

export default ProjectHeader;