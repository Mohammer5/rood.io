import React from 'react'
import cx from 'classnames'
import styles from './ToggleMuteButton.module.scss'

const createClassName = invert => cx(
  styles.button,
  { [styles.invert]: invert },
)

export const ToggleMuteButton = () => {
  return <span className={createClassName(false)} />
}
