import React from 'react'
import styles from './Marker.module.scss'

export const Marker = ({ marker }) => {
  return (
    <span
      className={styles.marker}
      style={{ left: `${timestamp / videoDuration * 100}%` }}
    />
  )
}
