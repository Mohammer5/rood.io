import React, { useContext } from 'react'
import { DataContext } from '../../dataContext'
import { Marker } from './Marker';
import styles from './Markers.module.scss'

export const Markers = () => {
  const { contents } = useContext(DataContext)

  return (
    <div className={styles.markers}>
      {contents.map(content => (
        <Marker
          key={content.title}
          title={content.title}
          timestamp={content.timestamp}
        />
      ))}
    </div>
  )
}
