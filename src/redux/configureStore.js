import { createEpicMiddleware } from 'redux-observable'
import { applyMiddleware, compose, createStore } from 'redux'
import { rootReducer } from './rootReducer'
import { rootEpic } from './rootEpic'

export const configureStore = (initialState, dependencies) => {
  const epicMiddleware = createEpicMiddleware({ dependencies })

  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(epicMiddleware))
  )

  epicMiddleware.run(rootEpic)

  return store
}
