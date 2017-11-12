import C from './constants'

const UpdateTimerAction = (currentTime) => {
  return {
    type: C.UPDATE_TIMER,
    currentTime
  }
}

export default UpdateTimerAction
