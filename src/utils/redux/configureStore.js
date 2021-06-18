import { createStore } from 'redux'

export const configureStore = ({
  initialState,
  rootReducer,
}) => {
  const store = createStore(rootReducer, initialState)
  return store
}
