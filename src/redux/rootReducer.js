import { combineReducers } from 'redux';

import { marker } from './marker/reducer'
import { presentation } from './presentation/reducer'
import { video } from './video/reducer'

export const rootReducer = combineReducers({
  marker,
  presentation,
  video,
})
