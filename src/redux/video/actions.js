export const TOGGLE_FULL_SCREEN = 'TOGGLE_FULL_SCREEN';
export const TOGGLE_MUTE = 'TOGGLE_MUTE'
export const PLAY = 'PLAY'
export const PAUSE = 'PAUSE'
export const SEEK = 'SEEK'
export const SEEK_END = 'SEEK_END'
export const SET_DURATION = 'SET_DURATION'
export const SET_VIDEO_URL = 'SET_VIDEO_URL'
export const SET_VIDEO_POSTER_URL = 'SET_VIDEO_POSTER_URL'
export const SET_VIDEO_LOADED = 'SET_VIDEO_LOADED'
export const UPDATE_CURRENT_TIME = 'UPDATE_CURRENT_TIME'

/**
 * @returns {Object}
 */
export const TOGGLE_FULL_SCREEN = () => ({
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
export const setVideoPosterUrl = loaded => ({
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
