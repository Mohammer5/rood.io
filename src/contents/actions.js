import '../types'
import {
  SET_CONTENTS,
  SHOW_CONTENT,
  SET_ACTIVE_CONTENT,
  HIDE_CONTENT,
} from './actionTypes'

/**
 * @param {Content[]} contents
 * @returns {Object}
 */
export const setContents = contents => ({
  type: SET_CONTENTS,
  payload: { contents },
})

/**
 * @param {number} contentNum
 * @returns {Object}
 */
export const setActiveContent = contentNum => ({
  type: SET_ACTIVE_CONTENT,
  payload: { contentNum },
})

/**
 * @returns {Object}
 */
export const showContent = () => ({
  type: SHOW_CONTENT,
})

/**
 * @returns {Object}
 */
export const hideContent = () => ({
  type: HIDE_CONTENT,
})
