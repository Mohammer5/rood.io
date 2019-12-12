import { from, of } from 'rxjs'
import { switchMap, map } from 'rxjs/operators';

import { globalUpdate } from './actions';

// @TODO
const getData = () => true
  ? Promise.resolve(require('../../data/sampleData').default)
  : Promise.reject();

export const initializeApp = () => of(null).pipe(
  switchMap(() => from(getData())),
  map(data => {
    console.log('data', data);
    const payload = {
      presentation: { title: data.title },
      video: { url: data.video.src, duration: data.video.duration },
      marker: { markers: data.markers }
    }

    return globalUpdate(payload)
  }),
)
