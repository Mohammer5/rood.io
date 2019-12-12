export const SET_TITLE = 'SET_TITLE'

/**
 * @param {string} title
 * @returns {Object}
 */
export const createSetTitleAction = title => ({
  type: SET_TITLE,
  payload: { title },
})
