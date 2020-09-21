import React from 'react';
import AppHeader from './header/AppHeader.js'
import AppContact from './contact/AppContact.js'
import AppCount from './count/AppCount.js'
import AppEvolution from './evolution/AppEvolution.js'
import './App.css';

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
