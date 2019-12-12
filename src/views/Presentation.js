import React from 'react'

import { Controls } from '../modules/controls/Controls';
import {
  MarkerContentSection,
} from '../modules/markerContentSection/MarkerContentSection';
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
      <MarkerContentSection />
    </div>
  )
}
