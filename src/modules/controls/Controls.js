import React from 'react'

import { TimeLine } from '../timeline/TimeLine';
import { CurrentTime } from './CurrentTime';
import { StopButton } from './StopButton';
import { ToggleMuteButton } from './ToggleMuteButton';
import { TogglePlayButton } from './TogglePlayButton';
import styles from './Controls.module.scss'

export const Controls = () => (
  <div id="controls" className={styles.controls}>
    <TogglePlayButton />
    <StopButton />
    <TimeLine />
    <CurrentTime />
    <ToggleMuteButton />
  </div>
)
