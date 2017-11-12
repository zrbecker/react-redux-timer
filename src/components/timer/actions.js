export const C = {
  START_TIMER: 'START_TIMER',
  RESET_TIMER: 'RESET_TIMER',
  UPDATE_TIMER: 'UPDATE_TIMER',
}

export const createResetTimerAction = () => {
  return {
    type: C.RESET_TIMER
  }
}

export const createStartTimerAction = (seconds) => {
  return {
    type: C.START_TIMER,
    startTime: Date.now(),
    seconds,
  }
}

export const createUpdateTimerAction = () => {
  return {
    type: C.UPDATE_TIMER,
    currentTime: Date.now()
  }
}
