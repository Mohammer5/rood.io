import { useDispatch, useSelector } from 'react-redux';
import React from 'react'
import cx from 'classnames'

import {
  getVideoPlaying,
  pause,
  play,
} from '../../redux';
import styles from './TogglePlayButton.module.scss'

const createClassName = playing => cx(
  styles.button,
  { [styles.playing]: playing },
)

export const TogglePlayButton = () => {
  const dispatch = useDispatch()
  const isPlaying = useSelector(getVideoPlaying)

  return <span
    className={createClassName(isPlaying)}
    onClick={() => dispatch(isPlaying ? pause() : play())}
  />
}
