import React from 'react'
import styles from './Controls.module.scss'
import { CurrentTime } from './CurrentTime';
import { StopButton } from './StopButton';
import { TimeLine } from './TimeLine';
import { ToggleMuteButton } from './ToggleMuteButton';
import { TogglePlayButton } from './TogglePlayButton';

export const Controls = ({ data }) => (
  <div id="controls" className={styles.controls}>
    <TogglePlayButton />
    <StopButton />
    <TimeLine />
    <CurrentTime />
    <ToggleMuteButton />
  </div>
)
