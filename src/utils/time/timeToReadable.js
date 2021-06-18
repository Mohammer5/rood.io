const SECOND = 1
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60

export const timeToReadable = timeInSeconds => {
  let remainingTime = Math.floor(timeInSeconds)

  const hours = Math.floor(remainingTime / HOUR)
  remainingTime -= hours * HOUR

  const minutes = Math.floor(remainingTime / MINUTE)
  remainingTime -= minutes * MINUTE

  const seconds = remainingTime

  const optional = [hours].filter(v => v)
  const required = [minutes, seconds]
  return [...optional, ...required]
    .map(v => v < 10 ? `0${v}` : v)
    .join(':')
}
