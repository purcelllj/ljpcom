import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainContent from './components/MainContent';
import Music from './components/Music';
import Nav from "./components/Nav";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/home' component={MainContent} />
          <Route path='/music' component={Music} />
        </Switch>
      </div>
    );
  }
}

export default App;
