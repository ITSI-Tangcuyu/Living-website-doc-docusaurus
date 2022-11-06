import React from 'react';
import wcs from '../../../../docs/base/basedata';

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
              <a href={'/docs/base/' + item.title}>
                <div
                  className='card__header'
                  style={{ padding: '1rem' }}>
                  <h2>{item.title}</h2>
                </div>
              </a>
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
