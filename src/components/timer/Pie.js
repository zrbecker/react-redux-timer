import React from 'react';

export default class Pie extends React.Component {
  constructor(props) {
     super(props);
    this.state = {style: {}, x: 400, y: 200, slice: (360/this.props.time), totalSlices: this.props.time};
    this.draw = this.draw.bind(this);
  }

  draw() {
    let radians = ( this.state.totalSlices - this.props.time + 1 )*this.state.slice*(Math.PI / 180);
    let radius = 200, cx = 200, cy = 200;
    let x = cx + radius*Math.cos(radians);
    let y = cy + radius*Math.sin(radians);
    this.setState( {x: x,y: y} );
  }

  shouldComponentUpdate(nextProps, nextState) {
    if( this.props.time != nextProps.time )
      return true;
    else
      return false;
    if( this.state.x != nextState.x ) {
      return true;
    }
  }

  componentDidUpdate() {
    this.draw();
  }

  render() {    
    //todo: supress warning on anti-pattern
    this.draw();
    return ( 
      <div>
        <svg height="400px" width="400px">
          <circle cx="200px" cy="200px" r="200px" />
           <line x1="200px" y1="200px" x2={this.state.x} y2={this.state.y} style={{ stroke: 'rgb(255,255,255)', strokeWidth: 2}} />       
        </svg>
      </div>
    )
  }
}