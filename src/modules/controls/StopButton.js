import { useDispatch } from 'react-redux';
import React from 'react'
import cx from 'classnames'

import { stop } from '../../redux';
import styles from './StopButton.module.scss'

export const StopButton = () => {
  const dispatch = useDispatch()
  const onClick = () => dispatch(stop())

  return <span
    className={cx(styles.button)}
    onClick={onClick}
  />
}
