import '../../types'
import {
  getActiveMarkerIndexForTime,
} from '../../modules/marker/getActiveMarkerIndexForTime';
import { GLOBAL_UPDATE } from '../app/actions'
import {
  UPDATE_CURRENT_TIME,
  SEEK,
} from '../video/actions'
import {
  HIDE_MARKER_CONTENT,
  SET_ACTIVE_MARKER,
  SET_MARKERS,
  SHOW_MARKER_CONTENT,
} from './actions'

/**
 * @typedef MarkerDefaultState
 * @prop {Marker[]} markers
 * @prop {number} activeMarker
 * @prop {boolean} showContent
 */

/**
 * @type {MarkerDefaultState}
 */
export const markerDefaultState = {
  markers: [],
  activeMarker: 0,
  showContent: false,
}

/**
 * @param {MarkerDefaultState} state
 * @param {Object} action
 * @returns {MarkerDefaultState}
 */
export const marker = (
  state = markerDefaultState,
  action = {},
) => {
  const { type, payload } = action

  if (type === HIDE_MARKER_CONTENT) {
    return { ...state, showContent: false }
  }

  if (type === SHOW_MARKER_CONTENT) {
    return { ...state, showContent: true }
  }

  if (type === SET_ACTIVE_MARKER) {
    return { ...state, activeMarker: payload }
  }

  if (type === SET_MARKERS) {
    return { ...state, markers: payload }
  }

  if (type === UPDATE_CURRENT_TIME) {
    const newActiveMarker = getActiveMarkerIndexForTime(
      state.markers,
      payload.currentTime,
    )

    if (newActiveMarker !== state.activeMarker) {
      return { ...state, activeMarker: newActiveMarker }
    }
  }

  if (type === SEEK) {
    const newActiveMarker = getActiveMarkerIndexForTime(
      state.markers,
      payload.time,
    )

    if (newActiveMarker !== state.activeMarker) {
      return { ...state, activeMarker: newActiveMarker }
    }
  }

  if (type === GLOBAL_UPDATE) {
    return { ...state, ...payload.marker }
  }

  return state
}
