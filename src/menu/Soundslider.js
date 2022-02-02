import React, { Component } from 'react';
import Slider from '@mui/material/Slider';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { styled } from '@mui/material/styles';

const CustomSlider = styled(Slider)(({ theme }) => ({
  "& .MuiSlider-thumb": {
    color: '#FFFFFF',
  },
  "& .MuiSlider-rail": {
    color: '#5B5858',
    height: '0.4em'

  },
  "& .MuiSlider-track": {
    color: '#D7D7D7',
    height: '0.5em'
  }
}));

export default class Soundslider extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      play: false,
      volume: 0.5
    }
    this.audio = new Audio(this.props.url)
    this.audio.volume=(this.state.volume);
  }


  componentDidMount() {
    this.audio.addEventListener('ended', () => this.setState({ play: false }));
  }

  componentWillUnmount() {
    this.audio.removeEventListener('ended', () => this.setState({ play: false }));
  }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  }

  soundControl = (event) => {
    console.log(event.target.value);
    this.setState({ volume: event.target.value });
    this.audio.volume=this.state.volume;
  }

  render() {
    return (
      <div>
        <div className="horizantal-Container">
          <img className='icons' src={this.props.icon_src}></img>
          <CustomSlider onChange={this.soundControl}
                  defaultValue={0.5}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  min={0}
                  max={1}
                  step={0.1}
                  />
          <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
        </div>
      </div>
    );
  }
}
