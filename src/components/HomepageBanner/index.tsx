import React from 'react';
import styles from './styles.module.scss';
import Image from '@theme/IdealImage';

export default function HomepageBanner(): JSX.Element {
  return (
    <section id='homepagebanner' className={styles.bannerspecial}>
      <Image img={require('../../../static/img/flame-forest-fire.png')} />
    </section>
  );
}
