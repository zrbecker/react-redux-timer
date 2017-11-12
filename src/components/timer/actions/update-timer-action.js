import C from './constants'

const UpdateTimerAction = () => {
  return {
    type: C.UPDATE_TIMER,
    currentTime: Date.now()
  }
}

export default UpdateTimerAction
