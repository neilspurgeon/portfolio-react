import React from 'react';
import styles from './style.css';

const Link = (props) => {

  return (
    <a
      className={styles.link}
      target="_blank"
      href={props.to}>
      {props.text}
    </a>
  );
};

export default Link;