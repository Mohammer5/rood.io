import React from 'react'

import { Controls } from '../modules/controls/Controls';
import { Player } from '../modules/video/Player';

export const Presentation = () => {
  return (
    <div id="Presentation">
      <Player
        posterUrl=""
        videoUrl=""
        onClick={() => null}
        onTimeUpdate={() => null}
      />

      <Controls />
    </div>
  )
}
