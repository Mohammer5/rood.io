export const toReadable = (date) =>
  date.toISOString().substr(11, 8);
