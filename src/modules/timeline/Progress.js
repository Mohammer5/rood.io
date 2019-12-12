import { useSelector } from 'react-redux';
import React from 'react'
import cx from 'classnames'

import {
  getVideoCurrentTime,
  getVideoDuration,
  getVideoSeeking,
} from '../../redux'
import styles from './Progress.module.scss'

/**
 * @param {number} currentTime
 * @param {number} duration
 * @returns {number}
 */
const getWidth = (currentTime, duration) =>
  Math.min(100, currentTime / duration * 100)

/**
 * @param {number} currentTime
 * @param {number} duration
 * @returns {Object}
 */
const getStyle = (currentTime, duration) =>
  ({ width: getWidth(currentTime, duration) + '%' })

export const Progress = () => {
  const isSeeking = useSelector(getVideoSeeking)
  const currentTime = useSelector(getVideoCurrentTime)
  const videoDuration = useSelector(getVideoDuration)

  return (
    <div className={styles.progress}>
      <div
        className={cx(styles.current, { [styles.isSeeking]: isSeeking })}
        style={getStyle(currentTime, videoDuration)}
      />
    </div>
  )
}
