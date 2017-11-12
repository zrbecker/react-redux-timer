import React from 'react'

import {createResetTimerAction, createStartTimerAction} from './actions'

const Timer = ({startTime, secondsRemaining, store}) => {
  const started = Boolean(startTime)
  if (started) {
    return (
      <div>
        <p>{secondsRemaining} seconds remaining</p>
        <button onClick={() => store.dispatch(createResetTimerAction())}>
          Reset Timer
        </button>
      </div>
    )
  } else {
    let secondsInput;
    return (
      <div>
        <input type="text" ref={input => secondsInput = input} />
        <button onClick={
          () => {
            let seconds = Number(secondsInput.value)
            if (isNaN(seconds)) {
              seconds = 0
            }
            store.dispatch(createStartTimerAction(seconds))
          }
        }>
          Start Timer
        </button>
      </div>
    )
  }
}

export default Timer
