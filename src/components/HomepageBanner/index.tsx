import React from 'react';
import styles from './styles.module.scss';

export default function HomepageBanner(): JSX.Element {
  return (
    <section
      id='homepagebanner'
      className={styles.bannerspecial}>
      <span className={styles.lead}>🏆 铂金赞助商</span>
      <img
        className={styles.sponsor}
        src='/img/itsi.png'
      />
      <span className={styles.sname}>娱信互动</span>
    </section>
  );
}
