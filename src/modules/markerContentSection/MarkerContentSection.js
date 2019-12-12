import { useSelector } from 'react-redux';
import React from 'react'
import cx from 'classnames'

import { MarkerListItem } from './MarkerListItem'
import { ToggleContentButton } from './ToggleContentButton'
import {
  getActiveMarker,
  getMarkers,
  getShowMarkerContent,
} from '../../redux';
import styles from './MarkerContentSection.module.scss'

export const MarkerContentSection = () => {
  const showContent = useSelector(getShowMarkerContent)
  const markers = useSelector(getMarkers)
  const activeMarker = useSelector(getActiveMarker)

  const containerClassName = cx(
    styles.container,
    { [styles.showContents]: showContent },
  )

  return (
    <section className={containerClassName}>
      <div className={styles.markersContainer}>
        {markers.map((marker, index) => (
          <MarkerListItem
            key={marker.title + index}
            marker={marker}
            isActive={activeMarker === index}
          />
        ))}
      </div>

      <ToggleContentButton />
    </section>
  )
}
