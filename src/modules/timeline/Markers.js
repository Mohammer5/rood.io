import { useSelector } from 'react-redux';
import React from 'react'

import { getMarkers } from '../../redux';
import { Marker } from './Marker';
import styles from './Markers.module.scss'

export const Markers = () => {
  const markers = useSelector(getMarkers)

  return (
    <div className={styles.markers}>
      {markers.forEach(marker => <Marker key={marker.title} marker={marker} />)}
    </div>
  )
}
