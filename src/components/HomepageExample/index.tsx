import React from 'react';
import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { Chrome } from '../Chrome';
import cn from 'classnames';


interface ExampleItem {
  title: string
  description: string
  chrome: any;
  titleClass: string
  demoLink: string
  svg: React.ComponentType<React.ComponentProps<'svg'>>;
}
// const [placement, setPlacement] = useState('top');
const Com = () => {
  return (
    <Chrome label='Click the dots' center scrollable relative={false}>
      {[
        {
          placement: 'top',
          styles: {
            left: 'calc(50% - 10px - 1rem)',
            top: 0,
          },
        },
        {
          placement: 'top-start',
          styles: {
            left: 'calc(50% - 70px - 1rem)',
            top: 0,
          },
        },
        {
          placement: 'top-end',
          styles: {
            left: 'calc(50% + 50px - 1rem)',
            top: 0,
          },
        },
        {
          placement: 'bottom',
          styles: {
            left: 'calc(50% - 10px - 1rem)',
            bottom: 0,
          },
        },
        {
          placement: 'bottom-start',
          styles: {
            left: 'calc(50% - 70px - 1rem)',
            bottom: 0,
          },
        },
        {
          placement: 'bottom-end',
          styles: {
            left: 'calc(50% + 50px - 1rem)',
            bottom: 0,
          },
        },
        {
          placement: 'right',
          styles: {
            top: 'calc(50% - 10px - 1rem)',
            right: 'min(50px, 5%)',
          },
        },
        {
          placement: 'right-start',
          styles: {
            top: 'calc(50% - 70px - 1rem)',
            right: 'min(50px, 5%)',
          },
        },
        {
          placement: 'right-end',
          styles: {
            top: 'calc(50% + 50px - 1rem)',
            right: 'min(50px, 5%)',
          },
        },
        {
          placement: 'left',
          styles: {
            top: 'calc(50% - 10px - 1rem)',
            left: 'min(50px, 5%)',
          },
        },
        {
          placement: 'left-start',
          styles: {
            top: 'calc(50% - 70px - 1rem)',
            left: 'min(50px, 5%)',
          },
        },
        {
          placement: 'left-end',
          styles: {
            top: 'calc(50% + 50px - 1rem)',
            left: 'min(50px, 5%)',
          },
        },
      ].map(({ placement: p, styles }) => (
        <button
          key={p}
          className="p-4 absolute transition hover:scale-125"
          style={styles}
          // onClick={() => setPlacement(p)}
          aria-label={p}
        >
          <div
            className={cn(
              'w-5 h-5 rounded-full border-2 border-solid',
              {
                // 'border-gray-500': placement === p,
                // 'border-gray-600': placement !== p,
                // 'bg-gray-500': placement === p,
              }
            )}
          />
        </button>
      ))}
    </Chrome>
  )
}

const Examples = [{
  title: 'Placement',
  description: 'Placement Description',
  chrome: '',
  titleClass: 'text-violet-300',
  demoLink: 'https://codesandbox.io/s/lively-waterfall-rbc1pi?file=/src/index.js',
  Svg: require('@site/static/img/browsers.svg').default,
}, {
  title: 'Placement',
  description: 'Placement Description',
  chrome: '',
  titleClass: 'text-violet-300',
  demoLink: 'https://codesandbox.io/s/lively-waterfall-rbc1pi?file=/src/index.js',
  Svg: require('@site/static/img/frameworks.svg').default,
}, {
  title: 'Placement',
  description: 'Placement Description',
  chrome: '',
  titleClass: 'text-violet-300',
  demoLink: 'https://codesandbox.io/s/lively-waterfall-rbc1pi?file=/src/index.js',
  Svg: require('@site/static/img/browsers.svg').default,
}, {
  title: 'Placement',
  description: 'Placement Description',
  chrome: '',
  titleClass: 'text-violet-300',
  demoLink: 'https://codesandbox.io/s/lively-waterfall-rbc1pi?file=/src/index.js',
  Svg: require('@site/static/img/browsers.svg').default,
}]

function GridItem({
  title,
  description,
  chrome,
  titleClass,
  demoLink,
}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <h3 className={`text-3xl font-bold mb-2 ${titleClass}`}>
          {title}
        </h3>
        <p className="text-xl mb-6">{description}</p>
      </div>
      <div className="relative items-center bg-gray-800 rounded-lg lg:h-auto">
        {chrome}
      </div>
      <a
        className="text-red-300 hover:text-red-200 border-red-300/30 border-b-2 text-center font-bold absolute right-6 top-6"
        href={demoLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        CodeSandbox
      </a>
    </div>
  );
}

function Feature({ title, Svg, description }: any) {
  return (
    <div className={clsx('col col--4')}>
      <div className='padding-top--md padding-bottom--md'>
        <div className='card'>
          <div className="card__image">
            <Svg className={styles.featureSvg} role="img" />
          </div>
          <div className="card__footer">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default function HomepageExample(): JSX.Element {
  return (
    <section>
      <div className="container">
        <div className="row padding-top--lg padding-bottom--lg">
          {Examples.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}