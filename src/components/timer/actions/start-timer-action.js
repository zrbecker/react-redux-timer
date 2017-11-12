import C from './constants'

const StartTimerAction = (startTime, seconds) => {
  return {
    type: C.START_TIMER,
    startTime,
    seconds
  }
}

export default StartTimerAction
