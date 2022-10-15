import React from 'react'
import styles from './styles.module.scss';


const Callout = ({ children, background = '--ifm-color-info-lightest', emoji = '💡' }) => {
  return (
    <div className={styles.container}>
      <span className={styles.icon}>{emoji}</span>
      <span className={styles.title}>{children}</span>
      <style>{`
        span > :global(p) {
          margin-top: 0;
        }
      `}</style>
    </div>
  )
}

export default Callout
