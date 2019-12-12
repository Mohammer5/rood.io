import { useDispatch, useSelector } from 'react-redux';
import React from 'react'
import cx from 'classnames'

import {
  getShowMarkerContent,
  hideMarkerContent,
  showMarkerContent
} from '../../redux';
import styles from './ToggleContentButton.module.scss'

export const ToggleContentButton = () => {
  const dispatch = useDispatch()
  const showContent = useSelector(getShowMarkerContent)
  const toggleMarkerContent = () => dispatch(
    showContent
      ? hideMarkerContent()
      : showMarkerContent()
  )

  return (
    <span
      className={cx(styles.button, { [styles.invert]: showContent })}
      onClick={toggleMarkerContent}
    />
  )
}
