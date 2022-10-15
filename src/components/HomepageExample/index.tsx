import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import Examples, { ExampleItem } from './exampleData';
import { H1 } from '../global/Typography/Typography';
import FadeInSlideUp from '../global/Animations/FadeInSlideUp';
import { InView } from 'react-intersection-observer';

function GridItem({
  title,
  description,
  demoLink,
  label,
  Svg,
  image,
  imgdesc,
}: ExampleItem) {
  return (
    <div className={clsx('col col--6 padding-top--sm')}>
      <div className="card">
        <div className='card__header'>
          <div className="padding-left--md">
            <h3 className={styles.title}>
              {title}
            </h3>
            <p className={styles.subtitle}>{description}</p>
          </div>
          <a
            className={styles.demolink}
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            在线样例
          </a>

        </div>
        <div className={styles.chrome}>
          <div className={styles.chromeheader}>
            <div
              className={styles.trafficlight}
            >
              <div
                className={styles.light}
                style={{ background: '#ec695e' }}
              />
              <div
                className={styles.light}
                style={{ background: '#f4bf4f' }}
              />
              <div
                className={styles.light}
                style={{ background: '#61c653' }}
              />
            </div>
            <div className={styles.chromelabel}>
              {label}
            </div>
          </div>
          <div className={styles.chromebody}>
            <InView threshold={0.2}>
              {({ ref, inView }: any) => (
                <div ref={ref} >
                  <FadeInSlideUp visible={inView} delay={0.5}>
                    <div className={styles.chromeimg} >
                      <img src={image} alt="示例图片" className={styles.chromeimg} />
                      {!!imgdesc ? <p className={styles.chromeimgdesc}>{imgdesc}</p> : ""}
                    </div>
                  </FadeInSlideUp>
                </div>
              )}
            </InView>

          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageExample(): JSX.Element {
  return (
    <section id='homepageexample'>
      <div className="container">
        <div >
          <H1 className={styles.head}>{'组件示例'}</H1>
        </div>
        <div className="row padding-top--lg padding-bottom--lg">
          {Examples.map((props, idx) => (
            <GridItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}