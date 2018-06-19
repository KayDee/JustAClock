import React, { Component } from 'react'
import Hourhand from '_Components/Hourhand/hourhand.js'
import Minutehand from '_Components/Minutehand/minutehand.js'
import './clockbase.sass'

class Clockbase extends Component{

  constructor(props){
    super(props)
    let date = new Date()
    this.state = {
      "h": date.getHours() - 12,
      "m": date.getMinutes()
    }
  }
  render(){
    let newDate
    setInterval(() => {
      newDate = new Date()
      // console.log('Interval')
      if(newDate.getMinutes() != this.state.m || newDate.getHours() != this.state.h){
        this.setState({
          "h": newDate.getHours() - 12,
          "m": newDate.getMinutes()
        })
      }
    }, 1000)
    return(
      <div className="clockbase">
        <div className="base">
          <Hourhand h={this.state.h} m={this.state.m} />
          <Minutehand m={this.state.m} />
        </div>
      </div>
    )
  }
}

export default Clockbase

// <Hourhand />
// <Minutehand />