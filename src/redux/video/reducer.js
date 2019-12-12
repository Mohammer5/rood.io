export const videoDefaultState = {
  url: '',
  posterUrl: '',
  currentTime: 0,
  duration: 0,
  muted: false,
  seeking: false,
  seekTo: -1,
  fullScreen: false,
  playing: false,
  loaded: false,
}

export const video = (
  state = videoDefaultState,
  action = {},
) => {
  const { type, payload } = action
  const { time, duration, url, posterUrl, loaded, currentTime } = payload

  if (type === TOGGLE_FULL_SCREEN) {
    return { ...state, fullScreen: !state.fullScreen }
  }

  if (type === TOGGLE_MUTE) {
    return { ...state, mute: !state.mute }
  }

  if (type === PLAY) {
    return { ...state, playing: true }
  }

  if (type === PAUSE) {
    return { ...state, playing: false }
  }

  if (type === SEEK) {
    return { ...state, seeking: true, seekTo: time, currentTime: time }
  }

  if (type === SEEK_END) {
    return { ...state, seeking: false }
  }

  if (type === SET_DURATION) {
    return { ...state, duration }
  }

  if (type === SET_VIDEO_URL) {
    return { ...state, url }
  }

  if (type === SET_VIDEO_POSTER_URL) {
    return { ...state, posterUrl }
  }

  if (type === SET_VIDEO_LOADED) {
    return { ...state, loaded }
  }

  if (type === UPDATE_CURRENT_TIME) {
    return { ...state, currentTime }
  }
}
