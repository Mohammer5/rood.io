import React from 'react'
import propTypes from '@dhis2/prop-types'

export const HTML5Player = ({
  videoUrl,
  onClick,
  onTimeUpdate,
  posterUrl,
}) => (
  <video
    playsInline // "playsinline" to make video play inline on iOS devices
    id="html5-player"
    src={videoUrl}
    poster={posterUrl}
    onClick={onClick}
    onTimeUpdate={onTimeUpdate}
  />
)

HTML5Player.propTypes = {
  videoUrl: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  onTimeUpdate: propTypes.func.isRequired,
  posterUrl: propTypes.string,
};

HTML5Player.defaultProps = {
  posterUrl: '',
};
