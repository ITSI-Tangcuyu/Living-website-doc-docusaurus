import React from 'react';
import styles from './styles.module.scss';

export default function HomepageBanner(): JSX.Element {
  return (
    <section
      id='homepagebanner'
      className={styles.bannerspecial}>
      <span className={styles.lead}>π ιιθ΅ε©ε</span>
      <img
        className={styles.sponsor}
        src='/img/itsi.png'
      />
      <span className={styles.sname}>ε¨±δΏ‘δΊε¨</span>
    </section>
  );
}
