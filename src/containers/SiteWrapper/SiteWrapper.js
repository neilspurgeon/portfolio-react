import React from 'react';
import styles from './styles.css';

const SiteWrapper = (props) => {
  return (
    <div className={styles.siteWrapper}>
      { props.children }
    </div>
  );
};

export default SiteWrapper;