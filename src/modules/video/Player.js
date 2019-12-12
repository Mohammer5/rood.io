import React from 'react'

import { HTML5Player } from './HTML5Player';
import styles from './Player.module.scss'

export const Player = () => {
  return (
    <div id="player" className={styles.player}>
      <HTML5Player />
    </div>
  )
}
