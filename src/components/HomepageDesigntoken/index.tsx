import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { H1 } from '../global/Typography/Typography';

export default function HomepageDesigntoken(): JSX.Element {
  return (
    <section id='homepagedesigntoken' >
      <div className={styles.dtcontainer}>
        <h2 className={styles.title}>
          Design Token -  Single Source Of Truth.
        </h2>
        <p className={styles.subtitle}>
          The core is only 600 bytes when minified and
          compressed with Brotli. Plus, the architecture is
          super modular, so tree-shaking works like a charm.
        </p>
        <div className="grid items-center py-8 pb-16">
          <div className="flex flex-col text-center text-md sm:text-lg md:text-xl mx-auto pr-4 sm:pr-20 md:pr-40">
            <div className="mb-2 flex gap-2 items-center justify-center">
              <code className="flex-1 text-blue-400 text-right">
                computePosition
                <span className="text-blue-200">()</span>
              </code>
              <span className="text-md text-gray-400 text-left [font-variant-numeric:tabular-nums]">
                <span className="invisible">+</span>0.6 kB
              </span>
            </div>
            {[
              { name: 'shift', size: '0.6 kB' },
              { name: 'limitShift', size: '0.2 kB' },
              { name: 'flip', size: '0.5 kB' },
              { name: 'hide', size: '0.2 kB' },
              { name: 'offset', size: '0.1 kB' },
              { name: 'autoPlacement', size: '0.4 kB' },
              { name: 'size', size: '0.3 kB' },
              { name: 'inline', size: '0.6 kB' },
            ].map(({ name, size }) => (
              <div
                className="mb-2 flex gap-2 items-center justify-center"
                key={name}
              >
                <code className="flex-1 text-blue-400 text-right">
                  {name}
                  <span className="text-blue-200">()</span>
                </code>
                <span className="text-md text-green-400 text-left [font-variant-numeric:tabular-nums]">
                  +{size}
                </span>
              </div>
            ))}
            <div className="mb-2 flex gap-3 items-center justify-center">
              <code className="flex-1 text-gray-400 text-right">
                DOM platform
              </code>
              <span className="text-md text-yellow-400 text-left [font-variant-numeric:tabular-nums]">
                +1.9 kB
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

