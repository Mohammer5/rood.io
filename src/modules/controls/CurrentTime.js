import React from 'react'

import { timeToReadable } from '../time/timeToReadable';
import styles from './CurrentTime.module.scss'

export const CurrentTime = () => {
  const currentTime = 0

  return (
    <span className={styles.currentTime}>
      {timeToReadable(currentTime)}
    </span>
  )
}
