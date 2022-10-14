import React from 'react';
import Container from '../global/Container/Container';
import FadeInSlideUp from '../global/Animations/FadeInSlideUp';
import { Stat, StatGroup } from '../global/Stats/Stats';
import Count from '../global/Count/Count';
import styles from './styles.module.scss';
import { InView } from 'react-intersection-observer';


export default function HomepageComponents(): JSX.Element {
  return (
    <section id='homepagecomponents' className={styles.licomp}>
      <InView threshold={0.25}>
        {({ inView, ref }) => (
          <div ref={ref}>
            <Container>
              <StatGroup>
                <FadeInSlideUp visible={inView} delay={0.1} duration={1.1}>
                  <Stat value={<Count from={0} to={84} duration={5} show={inView} delay={0.1} />} title="元组件" />
                </FadeInSlideUp>
                <FadeInSlideUp visible={inView} delay={0.5} duration={1}>
                  <Stat value={<Count from={0} to={199} duration={4} show={inView} delay={0.2} />} title="MIS组件" />
                </FadeInSlideUp>
                <FadeInSlideUp visible={inView} delay={0.25} duration={1.1}>
                  <Stat value={<Count from={0} to={142} duration={3} show={inView} delay={0.15} />} title="GIS组件" />
                </FadeInSlideUp>
              </StatGroup>
            </Container>
          </div>
        )
        }
      </InView>
    </section>
  )
}