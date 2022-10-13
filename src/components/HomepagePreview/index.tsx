import React from 'react';
import Container from '../global/Container/Container';
import List from '../global/List/List';
import ArticlePreview from '../global/ArticlePreview/ArticlePreview';
import styles from './styles.module.scss';


export interface Scene {
  mission_name: string;
  image: string;
  id: string;
  details: string | null;
}

const SceneList: Scene[] = [
  {
    mission_name: '地震专题',
    image: '/img/earthquake.jpg',
    id: 'earthquake',
    details: '地震专题的场景'
  },
  {
    mission_name: '消防专题',
    image: '/img/xiaofang.png',
    id: 'xiaofang',
    details: '消防专题的场景'
  },
  {
    mission_name: '台风专题',
    image: '/img/typhoon.jpg',
    id: 'typhoon',
    details: '台风专题的场景'
  },
  {
    mission_name: '城市生命线专题',
    image: '/img/city.jpg',
    id: 'city',
    details: '城市生命线专题的场景'
  },
  {
    mission_name: '洪涝专题',
    image: '/img/flood.jpg',
    id: 'flood',
    details: '洪涝专题的场景'
  },
  {
    mission_name: '工业安全',
    image: '/img/factory.jpg',
    id: 'factory',
    details: '工业安全题专题的场景'
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
          overline="JUNE 26, 2022"
          href={`#`}
        />
      </li>
    </Container>
  )
})

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.preview}>
      <List>
        {SceneList.map((scene, idx) => (
          <Preview key={idx} {...scene} />
        ))}
      </List>
    </section>
  )
};