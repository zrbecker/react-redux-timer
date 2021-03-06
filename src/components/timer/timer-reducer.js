import {C} from './actions'

const timerReducer = (state={}, action) => {
  switch (action.type) {
    case C.START_TIMER:
      return {
        ...state,
        startTime: action.startTime,
        seconds: action.seconds,
        secondsRemaining: action.seconds,
        paused: false
      }
    case C.UPDATE_TIMER:
      if (!state.paused) {
        const secondsElapsed = (action.currentTime - state.startTime) / 1000
        const secondsRemaining = Math.max(0,
          Math.ceil(state.seconds - secondsElapsed))
        return {
          ...state,
          secondsRemaining,
          paused: secondsRemaining === 0
        }
      } else {
        return state
      }
    case C.RESET_TIMER:
      return {}
    default:
      return state
  }
}

export default timerReducer
