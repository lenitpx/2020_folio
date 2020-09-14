import React from 'react';
import AppHeader from './header/AppHeader.js'
import AppContact from './contact/AppContact.js'
import AppCount from './count/AppCount.js'
import AppEvolution from './evolution/AppEvolution.js'
import './App.css';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

const homeCache = new InMemoryCache();

const client = new ApolloClient({
  homeCache
})

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
