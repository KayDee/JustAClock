import React, { Component } from 'react'
import Hourhand from '_Components/Hourhand/hourhand.js'
import Minutehand from '_Components/Minutehand/minutehand.js'
import './clockbase.sass'

class Clockbase extends Component{

  constructor(props){
    super(props)

    this.weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    let date = new Date()
    this.state = {
      "h": date.getHours() - 12,
      "m": date.getMinutes(),
      "test": date.getDate() + date.getMonth() + date.getFullYear(),
      "d": `${this.weekdays[date.getDay()]} , ${this.months[date.getMonth()]} ${date.getDate()}`
    }
    setInterval(() => {
      let newDate = new Date()
      // console.log('Interval')
      if(newDate.getMinutes() != this.state.m || newDate.getHours() != this.state.h){
        this.setState({
          "h": newDate.getHours() - 12,
          "m": newDate.getMinutes()
        })
      }
      if(date.getDate() + date.getMonth() + date.getFullYear() != this.state.test){
        this.setState({
          "test": date.getDate() + date.getMonth() + date.getFullYear(),
          "d": `${this.weekdays[date.getDay()]} , ${this.months[date.getMonth()]} ${date.getDate()}`
        })

      }
    }, 1000)
  }

  render(){
    return(
      <div className="container">
        <div className="clockbase">
          <div className="base">
            <Hourhand h={this.state.h} m={this.state.m} />
            <Minutehand m={this.state.m} />
          </div>
        </div>
        <span>{this.state.d}</span>
      </div>
    )
  }
}

export default Clockbase

// <Hourhand />
// <Minutehand />