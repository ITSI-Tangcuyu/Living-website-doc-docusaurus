import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { H1 } from '../global/Typography/Typography';
import Link from '@docusaurus/Link';
import Button from '../global/Button/Button';


interface CardItem {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  desc: string;
  src: string;
  label: string;
}

const CardList: CardItem[] = [
  {
    title: '安装',
    Svg: require('@site/static/icons/guide-installation-icon.svg').default,
    desc: 'Living Design System提供了方便的命令行工具，可以通过NPM或Yarn包管理器进行快速安装',
    src: '/docs/intro',
    label: '查看'
  },
  {
    title: '使用指南',
    Svg: require('@site/static/icons/guide-native-icon.svg').default,
    desc: '从设计原则、命名原则、CSS框架、可访问性等层面让你对LDS有一个全面的了解',
    src: '/docs/docs/principles',
    label: '查看'
  },
  {
    title: '组件库',
    Svg: require('@site/static/icons/guide-components-icon.svg').default,
    desc: '组件库是可复用基础单元，通过低代码平台用可视化的方式快速搭建应急行业业务系统',
    src: '/docs/base',
    label: '查看'
  }
]

function Card({ title, Svg, desc, src, label }: CardItem) {
  return (
    <div className={clsx('col col--4 padding-top--lg')}>
      <div className="card shadow--sm padding-left--md" style={{ background: '#FFFFFF' }}>
        <div className="card__header">
          <div className="avatar">
            <Link href={src} >
              <Svg className={styles.featureSvg} role="img" />
            </Link>
          </div>
        </div>
        <div className="card__body">
          <h3>{title}</h3>
          <small>
            {desc}
          </small>
        </div>
        <div className="card__footer">
          {src && (
            <Link href={src} >
              <Button style={{
                background: '#000000',
                boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)'
              }}>{label}</Button>
            </Link>)}
        </div>
      </div>
    </div>
  )
}

export default function HomepageReady(): JSX.Element {
  return (
    <section id='homepageready' >
      <div className={styles.container}>
        <div >
          <H1 className={styles.head}>{'开始学习'}</H1>
        </div>
        <div className='row margin-left--xl margin-right--xl'>
          {CardList.map((props, idx) => (
            <Card key={idx} {...props} />
          ))}
        </div>
      </div >
    </section >
  )
}

