import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useRef } from 'react'
import { pause, play, updateCurrentTime } from './actions'
import {
  getVideoMuted,
  getVideoPlaying,
  getVideoSeeking,
  getVideoSeekTo,
} from './selectors'

const useTogglePlay = (video, isPlaying, seeking) => {
  useEffect(() => {
    if (video && !seeking) {
      try {
        if (!video.paused && !isPlaying) {
          video.pause()
        }

        if (video.paused && isPlaying) {
          video.play()
        }
      } catch (e) {}
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
      try {
        if (video.paused && isPlaying && !seeking) {
          video.play()
        }

        if (!video.paused && isPlaying && seeking) {
          video.pause()
        }
      } catch (e) {}
    }
  }, [ video, isPlaying, seeking ])
}

const useUpdateTime = (video, seekTo) => {
  useEffect(() => {
    if (video && seekTo !== -1) {
      video.currentTime = seekTo
    }
  }, [ video, seekTo ])
}

export const HTML5Player = ({ posterUrl, videoUrl }) => {
  const ref = useRef()
  const dispatch = useDispatch()

  const isPlaying = useSelector(getVideoPlaying)
  const isMuted = useSelector(getVideoMuted)
  const seeking = useSelector(getVideoSeeking)
  const seekTo = useSelector(getVideoSeekTo)

  useTogglePlay(ref.current, isPlaying, seeking)
  useToggleMute(ref.current, isMuted)
  useHandleSeeking(ref.current, isPlaying, seeking)
  useUpdateTime(ref.current, seekTo)

  return (
    <video
      playsInline // "playsinline" to make video play inline on iOS devices
      ref={ref}
      id="html5-player"
      poster={posterUrl}
      onClick={() => dispatch(isPlaying ? pause() : play())}
      onTimeUpdate={({ target }) => {
        const { currentTime } = target
        const action = updateCurrentTime(currentTime)
        dispatch(action)
      }}
    >
      <source
        src={videoUrl}
        type="video/mp4"
      />
    </video>
  )
}
