import { flow } from 'lodash/fp';
import { secondsToTime } from './secondsToTime';

export const timeToReadable = flow(
  Math.ceil,
  secondsToTime,
);
