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
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="titleSplash"><Link to="/">beansoft</Link></div>
          <div className="menuItem"><Link to="/work">work</Link></div>
          <div className="menuItem"><Link to="/background">background</Link></div>
          <div className="menuItem"><Link to="/contact">contact</Link></div>
        </header>
        <div className="mobile-body">
          <div className="work-mobile-link">
          </div>
        </div>
        <Switch>
          <Route path="/work">
            <AppWork />
          </Route>
          <Route path="/background">
            <AppCount />
          </Route>
          <Route path="/contact">
            <AppContact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
