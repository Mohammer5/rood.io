import { useSelector } from 'react-redux';
import React, { useContext } from 'react'
import cx from 'classnames'
import { DataContext } from '../../dataContext'
import { getVideoCurrentTime, getVideoSeeking } from '../../video'
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
  const data = useContext(DataContext)
  const videoDuration = data.video.duration
  const isSeeking = useSelector(getVideoSeeking)
  const currentTime = useSelector(getVideoCurrentTime)

  return (
    <div className={styles.progress}>
      <div
        className={cx(styles.current, { [styles.isSeeking]: isSeeking })}
        style={getStyle(currentTime, videoDuration)}
      />
    </div>
  )
}
