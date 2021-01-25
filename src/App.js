import React from 'react';
import AppContact from './contact/AppContact.js'
import AppCount from './count/AppCount.js'
import AppWork from './evolution/AppWork.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="titleSplash">beansoft</div>
        <div className="menuItem">work</div>
        <div className="menuItem">background</div>
        <div className="menuItem">contact</div>
      </header>
    </div>
  );
}

export default App;
