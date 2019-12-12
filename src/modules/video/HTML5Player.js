import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useRef } from 'react'

import {
  getVideoMuted,
  getVideoPlaying,
  getVideoPosterUrl,
  getVideoUrl,
  getVideoSeeking,
  getVideoSeekTo,
  pause,
  play,
  updateCurrentTime,
} from '../../redux'

  const useTogglePlay = (video, isPlaying, seeking) => {
  useEffect(() => {
    if (video && !seeking) {
      if (!video.paused && !isPlaying) {
        video.pause()
      }

      if (video.paused && isPlaying) {
        video.play()
      }
    }
  }, [ video, isPlaying, seeking ])
}

const useToggleMute = (video, isMuted) => {
  useEffect(() => {
    if (video) {
      if (video.volume === 0 && !isMuted) {
        video.volume = 1
      }

      if (video.volume !== 0 && isMuted) {
        video.volume = 0
      }
    }
  }, [ video, isMuted ])
}

const useHandleSeeking = (video, isPlaying, seeking) => {
  useEffect(() => {
    if (video) {
      if (video.paused && isPlaying && !seeking) {
        video.play()
      }

      if (!video.paused && isPlaying && seeking) {
        video.pause()
      }
    }
  }, [ video, isPlaying, seeking ])
}

const useUpdateTime = (video, seekTo) => {
  useEffect(() => {
    if (video !== null && seekTo !== -1) {
      video.currentTime = seekTo
    }
  }, [ video, seekTo ])
}

export const HTML5Player = () => {
  const ref = useRef(null)
  const dispatch = useDispatch()
  const isPlaying = useSelector(getVideoPlaying)
  const isMuted = useSelector(getVideoMuted)
  const seeking = useSelector(getVideoSeeking)
  const seekTo = useSelector(getVideoSeekTo)
  const videoUrl = useSelector(getVideoUrl)
  const posterUrl = useSelector(getVideoPosterUrl)
  const onClick = () => dispatch(isPlaying ? pause() : play())
  const onTimeUpdate = event => {
    const time = event.target.currentTime
    dispatch(updateCurrentTime(time))
  }

  useTogglePlay(ref.current, isPlaying, seeking)
  useToggleMute(ref.current, isMuted)
  useHandleSeeking(ref.current, isPlaying, seeking)
  useUpdateTime(ref.current, seekTo)

  return (
    <video
      playsInline // "playsinline" to make video play inline on iOS devices
      ref={ref}
      id="html5-player"
      src={videoUrl}
      poster={posterUrl}
      onClick={onClick}
      onTimeUpdate={onTimeUpdate}
    />
  )
}
