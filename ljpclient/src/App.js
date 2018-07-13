import React, { Component } from 'react';
import MainContent from './components/MainContent'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MainContent />
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
