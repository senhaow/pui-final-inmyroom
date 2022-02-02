import React, { Component } from 'react';
import { render } from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                  collapse: true
    };
  }
  //This happens when the component mount and the setInterval function get called with a call back function updateClock()
  componentDidMount() {
      this.intervalID = setInterval(() =>
        this.updateClock(),
        3000
      );}

//This section clears setInterval by calling intervalID so as to optimise memory
  componentWillUnmount(){
    clearInterval(this.intervalID)
  }

//This function set the state of the time to a new time
  updateClock(){
    this.setState({
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
  }

  render() {
    return (
      <div>
        <h1 id="header">{this.state.time}</h1>
      </div>
    );
  }
}

export default Clock;
