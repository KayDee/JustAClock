import React, { Component } from 'react'
import './minutehand.sass'

class Minutehand extends Component{

  render(){
    let angle = (this.props.m / 60) * 360
    return (
      <div className="min" style={{transform: `translate3d(0px,0,0) rotate(${angle - 90}deg`}}></div>
    )
  }


}

export default Minutehand