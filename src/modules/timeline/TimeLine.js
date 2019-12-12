import { useDispatch, useSelector } from 'react-redux';
import React, { useRef, useState } from 'react'

import { Markers } from './Markers';
import { Progress } from './Progress';
import { TimePreview } from './TimePreview';
import {
  getVideoDuration,
  getVideoSeeking,
  getVideoShowTimePreview,
  hideTimePreview,
  seek,
  seekEnd,
  timePreview,
} from '../../redux';
import styles from './TimeLine.module.scss'

const getTime = (timeline, event, duration) => {
  const { offsetLeft, offsetWidth } = timeline;
  const offset = event.pageX - offsetLeft
  const time = (offset / offsetWidth) * duration;

  return time
}

export const TimeLine = () => {
  const [ previewPosition, setPreviewPosition ] = useState(0)
  const ref = useRef(null)
  const dispatch = useDispatch()
  const seeking = useSelector(getVideoSeeking)
  const duration = useSelector(getVideoDuration)
  const showTimePreview = useSelector(getVideoShowTimePreview)
  const onMouseLeave = () => dispatch(hideTimePreview())
  const onSeekEnd = event => {
    if (!seeking) return
    dispatch(seekEnd())
  }
  const onSeek = start => event => {
    const timeline = ref.current
    const time = getTime(timeline, event, duration)

    setPreviewPosition(event.pageX - timeline.offsetLeft)
    dispatch(timePreview(time))

    if (!start && !seeking) return
    dispatch(seek(time))
  }

  return (
    <div
      ref={ref}
      className={styles.timeline}
      onMouseDown={onSeek(true)}
      onMouseMove={onSeek(false)}
      onMouseUp={onSeekEnd}
      onMouseLeave={onMouseLeave}
      onTouchStart={onSeek(true)}
      onTouchMove={onSeek(false)}
      onTouchEnd={onSeekEnd}
    >
      <Markers />
      <Progress />

        {showTimePreview && (
          <TimePreview previewPosition={previewPosition} />
        )}
    </div>
  )
}
