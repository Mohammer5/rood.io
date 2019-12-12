import { useSelector } from 'react-redux';
import React from 'react'

import { getVideoDuration } from '../../redux';
import styles from './Marker.module.scss'

export const Marker = ({ marker }) => {
  const videoDuration = useSelector(getVideoDuration)
  const { timestamp } = marker

  return (
    <span
      className={styles.marker}
      style={{ left: `${timestamp / videoDuration * 100}%` }}
    />
  )
}
