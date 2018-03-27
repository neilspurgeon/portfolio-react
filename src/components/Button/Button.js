import React from 'react';
import styles from './style.css';

const Button = (props) => {

  return (
    <button type={props.type} className={props.className ? [styles.button, props.className].join(' ') : styles.button}>
      {props.text}
    </button>
  );
};

export default Button;