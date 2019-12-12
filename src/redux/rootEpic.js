import { combineEpics } from 'redux-observable';

import { initializeApp } from './app/epics';

export const rootEpic = combineEpics(
  initializeApp,
)
