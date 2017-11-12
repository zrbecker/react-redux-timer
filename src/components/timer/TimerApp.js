import React from 'react'
import * as Redux from 'redux'

import timerReducer from './timer-reducer'
import Timer from './Timer'
import {createUpdateTimerAction} from './actions'

export default class TimerApp extends React.Component {
  constructor() {
    super()
    this.store = Redux.createStore(timerReducer)
    this.interval = null

    this.store.subscribe(() => this.onStorageUpdate())
  }

  onStorageUpdate() {
    // Start or stop javascript time interval if needed.
    const {paused} = this.store.getState()
    if (!paused && !this.interval) {
      this.interval = setInterval(
        () => this.store.dispatch(createUpdateTimerAction()), 100)
    } else if (paused && this.interval) {
      clearInterval(this.interval)
      this.interval = null
    }

    // Render component with new state.
    this.forceUpdate()
  }

  render() {
    return (
      <Timer {...this.store.getState()} store={this.store} />
    )
  }
}