import { useSelector } from 'react-redux';
import React from 'react'
import propTypes from 'prop-types'
import cx from 'classnames'

import { getPresentationTitle } from '../../redux';
import { toDangerousReactHtml } from '../react/toDangerousReactHtml'
import styles from './MarkerListItem.module.scss'

export const MarkerListItem = ({ isActive, marker }) => {
  const presentationTitle = useSelector(getPresentationTitle)
  const className = cx(styles.marker, { [styles.active]: isActive })

  return (
    <div key={marker.title} className={className}>
      <article className={styles.contentWrapper}>
        <h1 className={styles.title}>
          <span className={styles.presentationTitle}>
            {presentationTitle}
          </span>
          <span className={styles.markerTitle}>
              {marker.title}
          </span>
        </h1>

        <div
          className={styles.markerBody}
          dangerouslySetInnerHTML={toDangerousReactHtml(marker.content)}
        />
      </article>
    </div>
  )
}

MarkerListItem.propTypes = {
  marker: propTypes.object.isRequired,
  isActive: propTypes.bool.isRequired,
}
