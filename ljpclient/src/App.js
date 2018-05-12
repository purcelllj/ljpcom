import React, { Component } from 'react';
import './App.css';

class About extends Component {
  constructor() {
    super();
    this.state = {
      navbar: []
    };
  }

  componentDidMount(){
    const options = {
      method: 'GET',
      cache: 'default'
    }

    const url = '/home'

    fetch(url, options)
      .then(result => result.json())
      .then(navbar => this.setState({navbar:navbar}));
  }

  render(){
    return (
      <div>
        <h1 className="App-title">Liam James Purcell</h1>
        <div className="navDiv">
          <ul className="naviList" id="navi">{this.state.navbar.map((nav, i)=><li key={i}>{nav.name}</li>)}</ul>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <About />
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
