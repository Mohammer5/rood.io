import React from react
import styles from './Progress.module.scss'

export const Progress = () => {
  const isSeeking = false
  const currentTime = 10
  const videoDuration = 60

  return (
    <div className={styles.progress}>
      <div
        className={cx(styles.current, { [styles.isSeeking]: isSeeking })}
        style={getStyle(currentTime, videoDuration)}
      />
    </div>
  )
}
