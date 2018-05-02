import React from 'react';
import styles from './style.css';



const Link = (props) => {

  const linkStyle = props.onDark ? [styles.link, styles.onDark].join(' ') : styles.link;

  return (
    <a
      className={linkStyle}
      target="_blank"
      rel="noopener noreferrer"
      href={props.to}>
      {props.text}
    </a>
  );
};

export default Link;