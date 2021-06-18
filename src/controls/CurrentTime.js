import { useSelector } from 'react-redux';
import React from 'react'
import { getVideoCurrentTime } from '../video';
import { timeToReadable } from '../utils';
import styles from './CurrentTime.module.scss'

export const CurrentTime = () => {
  const currentTime = useSelector(getVideoCurrentTime)

  return (
    <span className={styles.currentTime}>
      {timeToReadable(currentTime)}
    </span>
  )
}
