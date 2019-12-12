import { useSelector } from 'react-redux';
import React from 'react'
import propTypes from 'prop-types'

import { getVideoTimePreview } from '../../redux/video/selectors';
import { timeToReadable } from '../time/timeToReadable';
import styles from './TimePreview.module.scss'

export const TimePreview = ({ previewPosition }) => {
  const timePreview = useSelector(getVideoTimePreview)

  return (
    <span className={styles.timePreview} style={{ left: previewPosition }}>
      <span>{timeToReadable(timePreview)}</span>
    </span>
  )
}

TimePreview.propTypes = {
  previewPosition: propTypes.number.isRequired,
}
