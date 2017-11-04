import React from 'react';
import styles from './style.css';

const Grid = (props) => {
  return (
    <div className={styles.grid}>
      {props.children}
    </div>
  );
};

export default Grid;