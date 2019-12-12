export const getMarker = state => state.marker
export const getMarkers = state => getMarker(state).markers
export const getActiveMarker = state => getMarker(state).activeMarker
export const getShowMarkerContent = state => getMarker(state).showContent
