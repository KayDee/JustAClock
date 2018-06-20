import React, { Component } from 'react'
import './minutehand.sass'

class Minutehand extends Component{

  render(){
    let angle = (this.props.m / 60) * 360
    let angleRad = (angle * Math.PI) / 180
    return (
      <div className="min-container" style={{transform: `rotate(${angle - 90}deg`}}>
        <div className="min" style={{boxShadow: `${-Math.cos(angleRad) * 13}px ${Math.sin(angleRad) * 13}px 15px 0 rgba(0,0,0,0.6)`}}></div>
      </div>
    )
  }


}

export default Minutehand