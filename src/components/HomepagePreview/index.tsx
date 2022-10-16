import React from 'react';
import Container from '../global/Container/Container';
import List from '../global/List/List';
import ArticlePreview from '../global/ArticlePreview/ArticlePreview';
import styles from './styles.module.scss';
import { H1 } from '../global/Typography/Typography';
import { StyledStat } from '../global/Stats/Stats.styles';

export interface Scene {
  mission_name: string;
  image: string;
  id: string;
  details: string | null;
  overline?: string;
}

const SceneList: Scene[] = [
  {
    mission_name: '地震专题',
    image: '/img/earthquake.jpg',
    id: 'earthquake',
    details: '地震专题的场景',
    overline: 'JUNE 22 2020'
  },
  {
    mission_name: '消防专题',
    image: '/img/xiaofang.png',
    id: 'xiaofang',
    details: '消防专题的场景',
    overline: 'March 15 2021'
  },
  {
    mission_name: '台风专题',
    image: '/img/typhoon.jpg',
    id: 'typhoon',
    details: '台风专题的场景',
    overline: 'May 18 2021'
  },
  {
    mission_name: '城市生命线专题',
    image: '/img/city.jpg',
    id: 'city',
    details: '城市生命线专题的场景',
    overline: 'SEP 20 2021'
  },
  {
    mission_name: '洪涝专题',
    image: '/img/flood.jpg',
    id: 'flood',
    details: '洪涝专题的场景',
    overline: 'NOV 01 2021'
  },
  {
    mission_name: '工业安全',
    image: '/img/factory.jpg',
    id: 'factory',
    details: '工业安全题专题的场景',
    overline: 'JAN 20 2022'
  },
]

const Preview = ((scene, idx) => {
  return (
    <Container style={{ marginTop: '1rem' }}>
      <li key={scene.id}>
        <ArticlePreview
          idx={idx}
          title={scene.mission_name}
          image={scene.image}
          overline={scene.overline}
          href={`#`}
        />
      </li>
    </Container>
  )
})

export default function HomepageFeatures(): JSX.Element {
  return (
    <section id='homepagefeatures' className={styles.preview}>
      <StyledStat>
        <div className={styles.head}>
          <H1>{'应用场景'}</H1>
        </div>
      </StyledStat>
      <List>
        {SceneList.map((scene, idx) => (
          <Preview key={idx} {...scene} />
        ))}
      </List>
    </section>
  )
};