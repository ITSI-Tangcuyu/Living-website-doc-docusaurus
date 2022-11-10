import React from 'react';
import index from '@itsi/base-components/dist/living-base/components/icons/li-icons.json';
import '@itsi/base-components/dist/components';

const IconCards = () => {
  return index.map((category) => {
    return (
      <div key={category.category}>
        <h4 style={{ marginTop: 16 }}>{category.label}</h4>
        <div className='row'>
          {category.items.map((item) => {
            let markup = () => ({
              __html: `<li-icon-${category.category}-${item}  size="24" accessibility-title="${item}" />`,
            });
            return (
              <div
                key={item}
                className='col col--4'>
                <span style={{ padding: '10px 0px' }}>
                  <span style={{ color: '#7C7C7C' }}>{category.category}-</span>
                  {item}
                </span>
                <div
                  className='card margin--sm'
                  style={{
                    backgroundColor: 'white',
                    boxShadow: '0 2px 2px 0 rgba(0,0,0,0.1)',
                    padding: '20px 20px',
                    margin: '-10px',
                  }}>
                  <span dangerouslySetInnerHTML={markup()}></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  });
};

export default IconCards;
