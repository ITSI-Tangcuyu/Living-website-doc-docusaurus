import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageComponents from '@site/src/components/HomepageComponents';
import HomepageReady from '@site/src/components/HomepageReady';
import HomepageExample from '@site/src/components/HomepageExample';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepagePreview from '@site/src/components/HomepagePreview';
import BackgroundImage from '@components/global/BackgroundImage/BackgroundImage';

import styles from './index.module.scss';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={clsx('hero hero--primary', styles.heroBanner)}>
      <BackgroundImage
        style={{ justifyContent: 'center' }}
        src='/img/living-bg.jpg'>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className='button button--secondary button--lg'
              to='/docs/'>
              快速入门 - 5min ⏱️
            </Link>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Living Design System'>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageComponents />
        <HomepageExample />
        <HomepagePreview />
        <HomepageReady />
      </main>
    </Layout>
  );
}
