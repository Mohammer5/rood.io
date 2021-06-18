import { SET_TITLE } from './actionTypes'

export const presentationDefaultState = {
  title: '',
}

export const reducer = (
  state = presentationDefaultState,
  action = {},
) => {
  const { type, payload } = action

  if (type === SET_TITLE) {
    return { ...state, title: payload.title }
  }

  return state
}
