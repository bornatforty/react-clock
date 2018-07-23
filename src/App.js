import React, { Component } from 'react'
import Clock from './Clock'
import './App.css'

class App extends Component {
  state =  {
    hours: '00',
    minutes: '00',
    seconds: '00'
  }

  componentDidMount() {
    setInterval(()=> {
      let date = new Date()
      this.setState({
          hours: date.getHours(),
          minutes: date.getMinutes(),
          seconds: date.getSeconds()
      })
    }, 1000)
  }
  

  render() {
    return (
      <div>
        <Clock {...this.state} /> 
      </div> //<Clock hours={this.state.hours} minutes... is also ok but harder to read. Also, ...this.state grabs all values in the object
      
    )
  }
}

export default App;
