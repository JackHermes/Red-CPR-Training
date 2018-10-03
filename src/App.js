import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './Header.js';
import VideoPage from './VideoPage.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <Header />
          {/*insert quicklink to mock course*/}
        </div>
      </div>
    );
  }
}

export default App;
