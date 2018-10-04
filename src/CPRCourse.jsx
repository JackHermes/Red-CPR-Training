import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TextPage from './TextPage.js';
import VideoPage from './VideoPage.js';

export default class CPRCourse extends Component {
    render() {
      return (
        <Router>
          <div id="cprCourse">
            <TextPage />
            <Link to="/video"><p id="video-btn">Video</p></Link>
            <Route path="/video" component={VideoPage}/>
            <p>Then we'll take a quiz, followed by results and, soon, an opportunity to receive a certificate</p>
          </div>
        </Router>
      );
    }
  }
