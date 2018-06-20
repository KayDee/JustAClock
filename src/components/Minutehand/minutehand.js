import React, { Component } from 'react'
import './minutehand.sass'

class Minutehand extends Component{

  render(){
    let angle = (this.props.m / 60) * 360
    return (
      <div className="min-container" style={{transform: `rotate(${angle - 90}deg`}}>
        <div className="min"></div>
      </div>
    )
  }


}

export default Minutehand