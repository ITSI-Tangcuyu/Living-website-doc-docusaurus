import React, { HTMLAttributes, ReactNode } from 'react';
import styles from './styles.module.scss';
import Link from '@docusaurus/Link';

const BirdButton = () => {
  return (
    <Link
      to='/docs/'
      style={{ textDecoration: 'none' }}
      className={`${styles.button} ${styles.button__bird}`}>
      <div className={styles.button__wrapper}>
        <span className={styles.button__text}>快速入门 - 5min ⏱️</span>
      </div>
      <div className={styles.birdBox}>
        <div className={`${styles.bird} ${styles.wakeup}`}>
          <div className={styles.bird__face}></div>
        </div>
        <div className={`${styles.bird} ${styles.wakeup}`}>
          <div className={styles.bird__face}></div>
        </div>
        <div className={styles.bird}>
          <div className={styles.bird__face}></div>
        </div>
      </div>
    </Link>
  );
};

export default BirdButton;
