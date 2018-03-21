import React from 'react';
import styles from './style.css';

const Container = (props) => {

  if (props.type === 'inset') return (
    <div className={styles.insetContainer}>
      {props.children}
    </div>
  );

  return (
    <div className={styles.mainContainer}>
      {props.children}
    </div>
  );
};

export default Container;