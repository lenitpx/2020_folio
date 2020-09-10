import React from 'react';
import AppHeader from './header/AppHeader.js'
import AppContact from './contact/AppContact.js'
import AppCount from './count/AppCount.js'
import AppEvolution from './evolution/AppEvolution.js'
import './App.css';

          // Edit <code>src/App.js</code> and save to reload.

function App() {
  return (
    <div className="App">
        <AppHeader />
        <AppContact />
        <AppCount />
        <AppEvolution />
    </div>
  );
}

export default App;
