import React, { Component } from 'react';
import VideoPlayer from './VideoPlayer.js';


  const videoJsOptions = {
    controls: true,
    sources: [{
      src: 'http://www.w3schools.com/html/mov_bbb.mp4',
      type: 'video/mp4'
    }]
  }

export default class VideoPage extends Component {
    render() {
      return (
        <div className="video-wrapper">
          <VideoPlayer { ...videoJsOptions }/>
        </div>
      );
    }
  }
