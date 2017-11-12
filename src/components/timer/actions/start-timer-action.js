import C from './constants'

const StartTimerAction = (seconds) => {
  return {
    type: C.START_TIMER,
    startTime: Date.now(),
    seconds,
  }
}

export default StartTimerAction
