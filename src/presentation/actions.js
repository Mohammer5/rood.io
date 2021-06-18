import { SET_TITLE } from './actionTypes'

/**
 * @param {string} title
 * @returns {Object}
 */
export const setTitle = title => ({
  type: SET_TITLE,
  payload: { title },
})
