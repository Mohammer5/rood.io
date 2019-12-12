import { flow } from 'lodash/fp';
import { setSeconds } from '../date/setSeconds';
import { toReadable } from '../date/toReadable';

const date = new Date(null);

export const secondsToTime = flow(
  setSeconds(date),
  toReadable,
);
