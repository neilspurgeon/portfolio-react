import React from 'react';
import styles from './style.css';
import { Link } from 'react-router-dom';

const Cta = (props) => {

  return (
    <Link className={styles.cta}
      to={props.to}>
      {props.text}
    </Link>
  );
};

export default Cta;