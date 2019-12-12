import '../../types'

const hasTimePastMarkerTime = (timestamp, time) => time >= timestamp

/**
 * @param {Marker[]} markers
 * @param {number} time
 * @returns {number}
 */
export const getActiveMarkerIndexForTime = (markers, time) =>
  markers.reduceRight(
    (markerIndex, { timestamp }, currentMarkerIndex) => {
      return markerIndex === 0 && hasTimePastMarkerTime(timestamp, time)
        ? currentMarkerIndex
        : markerIndex
    },
    0,
  )
