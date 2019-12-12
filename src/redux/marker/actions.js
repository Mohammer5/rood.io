import '../../types'

export const SET_MARKERS = 'SET_MARKERS'
export const SHOW_MARKER_CONTENT = 'SHOW_MARKER_CONTENT'
export const SET_ACTIVE_MARKER = 'SET_ACTIVE_MARKER'
export const HIDE_MARKER_CONTENT = 'HIDE_MARKER_CONTENT'

/**
 * @param {Marker[]} markers
 * @returns {Object}
 */
export const setMarkers = markers => ({
  type: SET_MARKERS,
  payload: { markers },
})

/**
 * @param {number} markerNum
 * @returns {Object}
 */
export const setActiveMarker = markerNum => ({
  type: SET_ACTIVE_MARKER,
  payload: { markerNum },
})

/**
 * @returns {Object}
 */
export const showMarkerContent = () => ({
  type: SHOW_MARKER_CONTENT,
})

/**
 * @returns {Object}
 */
export const hideMarkerContent = () => ({
  type: HIDE_MARKER_CONTENT,
})
