import '../types'

const hasTimePastContentTime = (timestamp, time) => time >= timestamp

/**
 * @param {Content[]} contents
 * @param {number} time
 * @returns {number}
 */
export const getActiveContentIndexForTime = (contents, time) =>
  contents.reduceRight(
    (contentIndex, { timestamp }, currentContentIndex) => {
      return contentIndex === 0 && hasTimePastContentTime(timestamp, time)
        ? currentContentIndex
        : contentIndex
    },
    0,
  )
