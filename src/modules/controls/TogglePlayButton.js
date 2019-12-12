import React from 'react'
import cx from 'classnames'
import styles from './TogglePlayButton.module.scss'

const createClassName = playing => cx(
  styles.button,
  { [styles.playing]: playing },
)

export const TogglePlayButton = () => {
  return <span className={createClassName(false)} />
}
