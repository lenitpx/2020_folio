import React from 'react';
import logo from '../logo.svg';

function AppHeader() {
    return (
        <header className="App-header">
      <div className="App-superscript">
      <p>
          if it's true what they say - <code>then what are you waiting for?</code>
        </p>
      </div>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          HeleniumDevelopment
        </a>
      </header>
    )
}

export default AppHeader;