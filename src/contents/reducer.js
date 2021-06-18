import '../types'
import { SHOW_CONTENT, HIDE_CONTENT } from './actionTypes'

export const getContentDefaultState = () => ({
  showContent: false,
})

export const reducer = (
  state = getContentDefaultState(),
  action = {},
) => {
  const { type } = action

  if (type === HIDE_CONTENT) {
    return { ...state, showContent: false }
  }

  if (type === SHOW_CONTENT) {
    return { ...state, showContent: true }
  }

  return state
}
