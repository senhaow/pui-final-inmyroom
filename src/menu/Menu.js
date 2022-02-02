import React, { Component } from 'react';
import useSound from "use-sound";
import Clock from "./Clock.js"
import CheckList from './Checklist.js'
import { render } from 'react-dom';
import './Menu.css'; // Tell webpack that Button.js uses these styles
import ReactDOM from 'react-dom';
import Soundslider from './Soundslider.js'
import Login from './spotify/Login.js'

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {collapse: false,
                  rotate: false
    };
    this.handleCollapse = this.handleCollapse.bind(this);
  }

  handleCollapse(){
    this.setState(function(state) {
      return {
        collapse: !state.toggle,
        rotate: false
      };
    });
  }

  render() {
    return (
      <div className='vertical-Container' id='menu-Modules'>
        <div className='horizantal-Container'>
          <button className = 'button-icon'><img id='arrow-image' src="/assets/icons/arrow.png"></img></button>
          <Clock />
        </div>
        <div className="vertical-Container">
          <h1>Atmosphere</h1>
          <h2>White Noise</h2>
          <Soundslider url="/assets/audio/rainsound.mp3" icon_src="/assets/icons/rain.png"/>
          <Soundslider url="/assets/audio/rainsound.mp3" icon_src="/assets/icons/snow.png"/>
        </div>
        <CheckList />
        <Login />
      </div>

    );
  }
}

ReactDOM.render(
  <Menu />,
  document.getElementById('menu')
);
