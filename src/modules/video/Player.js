import React from 'react'
import propTypes from '@dhis2/prop-types'

import { HTML5Player } from './HTML5Player';
import styles from './Player.module.scss'

export const Player = ({
  videoUrl,
  onClick,
  onTimeUpdate,
  posterUrl,
}) => (
  <div id="player" className={styles.player}>
    <HTML5Player
      videoUrl={videoUrl}
      onClick={onClick}
      onTimeUpdate={onTimeUpdate}
      posterUrl={posterUrl}
    />
  </div>
)

Player.propTypes = {
  videoUrl: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  onTimeUpdate: propTypes.func.isRequired,
  posterUrl: propTypes.string,
};

Player.defaultProps = {
  posterUrl: '',
};
