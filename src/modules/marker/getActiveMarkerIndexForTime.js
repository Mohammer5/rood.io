import '../../types'

const isFirstMarker = index => index === 0
const hasTimePastMarkerTime = (timestamp, time) => time >= timestamp

/**
 * @param {Marker[]} markers
 * @param {number} time
 * @returns {number}
 */
export const getActiveMarkerIndexForTime = (markers, time) =>
  markers.reduceRight(
    (markerIndex, { timestamp }, iteration) =>
      markerIndex === 0 && hasTimePastMarkerTime(timestamp)
        ? markers.indexOf(markers.length - iteration)
        : markerIndex,
    0,
  )
