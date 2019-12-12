import { ignoreElement } from 'rxjs/operators'
import { ofType } from 'redux-observable';

import { PLAY } from './actions';

export const handlePlay = action$ => action$.pipe(
  ofType(PLAY),
  tap(() => {

  })
)
