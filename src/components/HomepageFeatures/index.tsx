import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Web Component组件库',
    Svg: require('@site/static/img/button.svg').default,
    description: (
      <>
        Web Component 是 WEB 标准原生提供的封装组件的方式，可以让开发人员定义可重复使用的自定义元素。
      </>
    ),
  },
  {
    title: '兼容流行的前端开发框架',
    Svg: require('@site/static/img/flexible.svg').default,
    description: (
      <>
        最大程度遵循和采用开放的、基于 WEB 标准的方法，全面兼容流行的前端开发框架：VUE，React，Angular，Svelet等
      </>
    ),
  },
  {
    title: '性能良好',
    Svg: require('@site/static/img/search.svg').default,
    description: (
      <>
        可访问性意味着让每个人都可以访问相同的信息，无论个人的身体和认知能力以及访问WEB的方式是否存在一定的限制
      </>
    ),
  },
  {
    title: '跨平台支持',
    Svg: require('@site/static/img/flexible.svg').default,
    description: (
      <>
        Web Component 是 WEB 标准原生提供的封装组件的方式，可以让开发人员定义可重复使用的自定义元素。
      </>
    ),
  },
  {
    title: 'Design Tokens',
    Svg: require('@site/static/img/tokenname.svg').default,
    description: (
      <>
        最大程度遵循和采用开放的、基于 WEB 标准的方法，全面兼容流行的前端开发框架：VUE，React，Angular，Svelet等
      </>
    ),
  },
  {
    title: 'A11Y可访问性支持',
    Svg: require('@site/static/img/a11y.svg').default,
    description: (
      <>
        可访问性意味着让每个人都可以访问相同的信息，无论个人的身体和认知能力以及访问WEB的方式是否存在一定的限制
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
