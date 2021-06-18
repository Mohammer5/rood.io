import { useDispatch, useSelector } from 'react-redux';
import React from 'react'
import cx from 'classnames'
import { getVideoMuted, toggleMute } from '../video'
import styles from './ToggleMuteButton.module.scss'

const createClassName = invert => cx(
  styles.button,
  { [styles.invert]: invert },
)

export const ToggleMuteButton = () => {
  const dispatch = useDispatch()
  const isMuted = useSelector(getVideoMuted)
  
  return <span
    className={createClassName(isMuted)}
    onClick={() => dispatch(toggleMute())}
  />
}
