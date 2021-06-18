import {
  TOGGLE_FULL_SCREEN,
  TOGGLE_MUTE,
  PLAY,
  PAUSE,
  STOP,
  SEEK,
  SEEK_END,
  SET_DURATION,
  SET_VIDEO_URL,
  SET_VIDEO_POSTER_URL,
  SET_VIDEO_LOADED,
  UPDATE_CURRENT_TIME,
  TIME_PREVIEW,
  HIDE_TIME_PREVIEW,
} from './actionTypes'

/**
 * @returns {Object}
 */
export const toggleFullScreen = () => ({
  type: TOGGLE_FULL_SCREEN,
})

/**
 * @returns {Object}
 */
export const toggleMute = () => ({
  type: TOGGLE_MUTE,
})

/**
 * @returns {Object}
 */
export const play = () => ({
  type: PLAY,
})

/**
 * @returns {Object}
 */
export const pause = () => ({
  type: PAUSE,
})

/**
 * @returns {Object}
 */
export const stop = () => ({
  type: STOP,
})

/**
 * @param {number} time
 * @returns {Object}
 */
export const seek = time => ({
  type: SEEK,
  payload: { time },
})

/**
 * @returns {Object}
 */
export const seekEnd = () => ({
  type: SEEK_END,
})

/**
 * @param {number} duration
 * @returns {Object}
 */
export const setDuration = duration => ({
  type: SET_DURATION,
  payload: { duration },
})

/**
 * @param {string} url
 * @returns {Object}
 */
export const setVideoUrl = url => ({
  type: SET_VIDEO_URL,
  payload: { url },
})

/**
 * @param {string} posterUrl
 * @returns {Object}
 */
export const setVideoPosterUrl = posterUrl => ({
  type: SET_VIDEO_POSTER_URL,
  payload: { posterUrl },
})

/**
 * @param {boolean} loaded
 * @returns {Object}
 */
export const setVideoLoaded = loaded => ({
  type: SET_VIDEO_LOADED,
  payload: { loaded },
})

/**
 * @param {number} currentTime
 * @returns {Object}
 */
export const updateCurrentTime = currentTime => ({
  type: UPDATE_CURRENT_TIME,
  payload: { currentTime },
})

/**
 * @param {number} time
 * @returns {Object}
 */
export const timePreview = time => ({
  type: TIME_PREVIEW,
  payload: { time },
})

/**
 * @returns {Object}
 */
export const hideTimePreview = () => ({
  type: HIDE_TIME_PREVIEW,
})
