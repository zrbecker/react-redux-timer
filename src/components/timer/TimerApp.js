import React from 'react'
import * as Redux from 'redux'

import timerReducer from './timer-reducer'
import Timer from './Timer'
import UpdateTimerAction from './actions/update-timer-action'

export default class TimerApp extends React.Component {
  constructor() {
    super()
    this.store = Redux.createStore(timerReducer)
    this.interval = null
    this.store.subscribe(() => {
      const {paused} = this.store.getState()
      if (!paused && !this.interval) {
        this.interval = setInterval(
          () => this.store.dispatch(UpdateTimerAction(Date.now())), 100)
      } else if (paused && this.interval) {
        clearInterval(this.interval)
        this.interval = null
      }
      this.forceUpdate()
    })
  }

  render() {
    return (
      <Timer {...this.store.getState()} store={this.store} />
    )
  }
}