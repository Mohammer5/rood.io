import { GLOBAL_UPDATE } from '../app/actions'
import { SET_TITLE } from './actions'

export const presentationDefaultState = {
  title: '',
}

export const presentation = (
  state = presentationDefaultState,
  action = {},
) => {
  const { type, payload } = action

  if (type === SET_TITLE) {
    return { ...state, title: payload.title }
  }

  if (type === GLOBAL_UPDATE) {
    return { ...state, ...payload.presentation }
  }

  return state
}
