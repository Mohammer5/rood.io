import { combineReducers } from 'redux';
import { contentReducer } from '../contents'
import { videoReducer } from '../video'
import { reducer } from './reducer'

export const rootReducer = combineReducers({
  content: contentReducer,
  presentation: reducer,
  video: videoReducer,
})
