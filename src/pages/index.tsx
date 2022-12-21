import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BirdButton from '@site/src/components/global/BirdButton/BirdButton';
import HomepageBanner from '@site/src/components/HomepageBanner';
import HomepageComponents from '@site/src/components/HomepageComponents';
import HomepageReady from '@site/src/components/HomepageReady';
import HomepageExample from '@site/src/components/HomepageExample';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepagePreview from '@site/src/components/HomepagePreview';

import styles from './index.module.scss';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <h1 className={clsx('hero__title', styles.title)}>
          {siteConfig.title}
        </h1>
        <p className={clsx('hero__subtitle', styles.subtitle)}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <BirdButton />
        </div>
      </div>
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
        <HomepageBanner />
        <HomepageFeatures />
        <HomepageComponents />
        <HomepageExample />
        <HomepagePreview />
        <HomepageReady />
      </main>
    </Layout>
  );
}
