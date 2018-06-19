import React, { Component } from 'react'
import Clockbase from './components/Clockbase/clockbase.js'
import './styles/base.sass'

class App extends Component{
  render(){
    return(
      <div className="container">
        <Clockbase />
      </div>
    );
  }
}

export default App