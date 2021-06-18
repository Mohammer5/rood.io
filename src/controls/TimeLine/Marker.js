import React, { useContext } from 'react'
import { DataContext } from '../../dataContext'
import styles from './Marker.module.scss'

export const Marker = ({ timestamp, title }) => {
  const { video } = useContext(DataContext)
  const { duration } = video

  return (
    <span
      title={title}
      className={styles.marker}
      style={{ left: `${timestamp / duration * 100}%` }}
    />
  )
}
