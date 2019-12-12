import { SET_TITLE } from './actions'

export const presentationDefaultState = {
  title: '',
}

export const presentationReducer = (
  state = presentationDefaultState,
  action = {},
) => {
  const { type, payload } = action
  const { title } = payload

  if (type === SET_PRESENTATION_DATA) {
    return { ...state, title }
  }

  return state
}
