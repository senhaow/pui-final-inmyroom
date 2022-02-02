import React from "react";
import "./Player.css";

const Player = props => {
  const backgroundStyles = {
    backgroundImage:`url(${
      props.item.album.images[0].url
    })`,
  };

  const progressBarStyles = {
    width: (props.progress_ms * 100 / props.item.duration_ms) + '%'
  };

  return (
    <div className="App">
      <div className="main-wrapper">
        <div className="now-playing__img">
          <img src={props.item.album.images[0].url} />
        </div>
        <div className="now-playing__side">
          <div className="now-playing__name">
            <h2>
              {props.item.name}
            </h2>
          </div>
          <div className="now-playing__artist">
            <h3>
              {props.item.artists[0].name}
            </h3>
          </div>
          <div className="now-playing__status">
            <h3>
              {props.is_playing ? "Playing" : "Paused"}
            </h3>
          </div>
          <div className="progress">
            <div className="progress__bar" style={progressBarStyles} />
          </div>
        </div>
        <div className="background" style={backgroundStyles} />{" "}
      </div>
    </div>
  );
}

export default Player;
