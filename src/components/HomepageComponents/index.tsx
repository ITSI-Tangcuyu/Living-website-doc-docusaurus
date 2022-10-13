import React from 'react';
import Container from '../global/Container/Container';
import FadeInSlideUp from '../global/Animations/FadeInSlideUp';
import { Stat, StatGroup } from '../global/Stats/Stats';
import Count from '../global/Count/Count';
import styles from './styles.module.scss';


export default function HomepageComponents(): JSX.Element {
  return (
    <section id='homepagecomponents' className={styles.licomp}>
      <Container>
        <StatGroup>
          <FadeInSlideUp visible={true} delay={0.1} duration={1.2}>
            <Stat value={<Count from={0} to={84} duration={5} show={true} delay={0.1} />} title="元组件" />
          </FadeInSlideUp>
          <FadeInSlideUp visible={true} delay={0.5} duration={1}>
            <Stat value={<Count from={0} to={199} duration={4} show={true} delay={0.2} />} title="MIS组件" />
          </FadeInSlideUp>
          <FadeInSlideUp visible={true} delay={0.25} duration={1.1}>
            <Stat value={<Count from={0} to={142} duration={3} show={true} delay={0.15} />} title="GIS组件" />
          </FadeInSlideUp>
        </StatGroup>
      </Container>
    </section>

  )
}