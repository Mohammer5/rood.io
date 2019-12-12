import { GLOBAL_UPDATE } from '../app/actions'
import { SHOW_MARKER_CONTENT } from '../marker/actions';
import { 
  HIDE_TIME_PREVIEW,
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
} from './actions'

export const videoDefaultState = {
  url: '',
  posterUrl: '',
  showTimePreview: false,
  timePreview: 0,
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

  if (type === TOGGLE_FULL_SCREEN) {
    return { ...state, fullScreen: !state.fullScreen }
  }

  if (type === TOGGLE_MUTE) {
    return { ...state, muted: !state.muted }
  }

  if (type === PLAY) {
    return { ...state, playing: true }
  }

  if (type === PAUSE || type === SHOW_MARKER_CONTENT) {
    return { ...state, playing: false }
  }

  if (type === STOP) {
    return { ...state, playing: false, seekTo: 0 }
  }

  if (type === SEEK) {
    return {
      ...state,
      seeking: true,
      seekTo: payload.time,
      currentTime: payload.time,
    }
  }

  if (type === SEEK_END) {
    return { ...state, seeking: false }
  }

  if (type === SET_DURATION) {
    return { ...state, duration: payload.duration }
  }

  if (type === SET_VIDEO_URL) {
    return { ...state, url: payload.url }
  }

  if (type === SET_VIDEO_POSTER_URL) {
    return { ...state, posterUrl: payload.posterUrl }
  }

  if (type === SET_VIDEO_LOADED) {
    return { ...state, loaded: payload.url }
  }

  if (type === UPDATE_CURRENT_TIME) {
    return { ...state, currentTime: payload.currentTime }
  }

  if (type === TIME_PREVIEW) {
    return { ...state, timePreview: payload.time, showTimePreview: true }
  }

  if (type === HIDE_TIME_PREVIEW) {
    return { ...state, showTimePreview: false }
  }

  if (type === GLOBAL_UPDATE) {
    return { ...state, ...payload.video }
  }

  return state
}
