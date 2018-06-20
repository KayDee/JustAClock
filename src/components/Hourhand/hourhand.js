import React, { Component } from 'react'
import './hourhand.sass'

class Hourhand extends Component{

  render(){
    let time = this.props.h + (this.props.m / 60)
    let angle = (time / 12) * 360
    return(
      <div className="hr-container" style={{transform: `rotate(${angle - 90}deg)`}}>
        <div className="hr" ></div>
      </div>
    )
  }


}

export default Hourhand