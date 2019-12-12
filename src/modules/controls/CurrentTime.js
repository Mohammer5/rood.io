import { useSelector } from 'react-redux';
import React from 'react'

import { getVideoCurrentTime } from '../../redux/video/selectors';
import { timeToReadable } from '../time/timeToReadable';
import styles from './CurrentTime.module.scss'

export const CurrentTime = () => {
  const currentTime = useSelector(getVideoCurrentTime)

  return (
    <span className={styles.currentTime}>
      {timeToReadable(currentTime)}
    </span>
  )
}
