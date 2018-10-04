import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
 import Home from './Home.js';
import CPRCourse from './CPRCourse.jsx'
import VideoPage from './VideoPage.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <div className="header">
          <div clasName="header-logo">
            <img src="https://www.redsafety.com/wp-content/uploads/2017/02/logo.png" />
          </div>
        <div className="navigation">
            <Link to="/">Home</Link>   Security   Fire   <Link to="/cpr">CPR</Link>   About   Careers
          </div>
        </div>

        <Route exact path="/" component={Home} />
        <Route path="/cpr" component={CPRCourse} />
      </div>
    </Router>
    );
  }
}

export default App;
