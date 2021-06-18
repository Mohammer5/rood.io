import { useSelector } from 'react-redux';
import React from 'react'
import propTypes from 'prop-types'
import { timeToReadable } from '../../utils';
import { getVideoTimePreview } from '../../video';
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
