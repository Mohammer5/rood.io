import React from 'react'

import styles from './TimeLine.module.scss'

export const TimeLine = () => {
  const onMouseDown = () => null
  const onMouseMove = () => null
  const onMouseUp = () => null

  return (
    <div
      className={styles.timeline}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onTouchStart={onMouseDown}
      onTouchMove={onMouseMove}
      onTouchEnd={onMouseUp}
    >
      <Markers />
      <Progress />
    </div>
  )
}
