import React, { Component } from 'react';

export default class Header extends Component {
    render() {
      return (
        <div className="header">
          <div clasName="header-logo">
            <img src="https://www.redsafety.com/wp-content/uploads/2017/02/logo.png" />
          </div>
        <div className="navigation">
            Home   Security   Fire   CPR   About   Careers
          </div>
        </div>
      );
    }
  }
