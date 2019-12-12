import React from react
import { Marker } from './Marker';
import styles from './Markers.module.scss'

export const Markers = () => {
  const markers = []
  const videoDuration = 60

  return (
    <div className={styles.markers}>
      {markers.forEach(marker => <Marker key={marker.title} marker={marker} />)}
    </div>
  )
}
