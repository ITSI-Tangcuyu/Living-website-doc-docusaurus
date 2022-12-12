import React from 'react';
import wcs from '../../../../docs/base/basedata';
import Link from '@docusaurus/Link';

const Cards = () => {
  return wcs.map((item, idx) => {
    return (
      <div
        key={idx}
        className='col col--6'>
        <div className='col-demo'>
          <div
            className='card margin--sm'
            style={{
              backgroundColor: 'white',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.1)',
            }}>
            <div>
              <div
                className='card__header'
                style={{ padding: '1rem' }}>
                <h2>
                  <Link
                    to={`base/${item.title}`}
                    target='_self'>
                    {item.title}
                  </Link>
                </h2>
              </div>

              <div
                className='card__body'
                style={{ padding: '1rem', color: 'gray' }}>
                <p>{item.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Cards;
