import React, { Component } from 'react'
import './hourhand.sass'

class Hourhand extends Component{

  render(){
    let time = this.props.h + (this.props.m / 60)
    let angle = (time / 12) * 360
    let angleRad = (angle * Math.PI) / 180
    // console.log(angle * Math.PI)
    return(
      <div className="hr-container" style={{transform: `rotate(${angle - 90}deg)`}}>
        <div className="hr" style={{boxShadow: `${-Math.cos(angleRad) * 13}px ${Math.sin(angleRad) * 13}px 10px 0 rgba(0,0,0,0.6)`}}></div>
      </div>
    )
  }


}

export default Hourhand