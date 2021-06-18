import { useDispatch, useSelector } from 'react-redux';
import React from 'react'
import cx from 'classnames'
import { showContent, hideContent } from './actions'
import { getShowContent } from './selectors';
import styles from './ToggleContentButton.module.scss'

export const ToggleContentButton = () => {
  const dispatch = useDispatch()
  const contentShown = useSelector(getShowContent)
  const toggleContent = () => dispatch(
    contentShown
      ? hideContent()
      : showContent()
  )

  return (
    <span
      className={cx(styles.button, { [styles.invert]: contentShown })}
      onClick={toggleContent}
    />
  )
}
