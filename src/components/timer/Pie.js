import React from 'react'

export default class Pie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {totalTime: null}
  }

  componentWillMount() {
    this.setState({totalTime: this.props.time});
  }

  render() {   
    
    const lineStyle = {
      stroke: '#FFF',
      strokeWidth: 2
    }
     
    let slice = 360/(this.state.totalTime)
    let totalSlices = this.state.totalTime
    let radians = (totalSlices - this.props.time)*slice*(Math.PI / 180)
    let radius = 200, cx = 200, cy = 200
    let x = radius*Math.cos(radians)
    let y = radius*Math.sin(radians)

    return ( 
      <div>
        <svg height="400px" width="400px">
          <circle cx={cx} cy={cy} r={radius} />
          <line x1={cx} y1={cy} x2={x+cx} y2={y+cy} style={lineStyle} />
          <circle cx={cx} cy={cy} r={8} fill="#F00" />
          {/* TODO: animate inner circle */}
          <g>
            <circle cx={x*.85+cx} cy={y*.85+cy} r={30} fill="#555"/>
          </g>
        </svg>
      </div>
    )
  }
}