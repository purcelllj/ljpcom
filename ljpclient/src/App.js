import React, { Component } from 'react';
import './App.css';

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      navbar: [],
      isShow: false
    };
    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    this.setState(function(prevState) {
      return {isShow: !prevState.isShow};
    })
  }

  render(){
    return (
      <div>
        <h1 className="App-title">Liam James Purcell</h1>
        <div className="navDiv">
          <ul className="naviList" id="navi">{this.state.navbar.map((nav, i)=><a href="#" onClick={this.handleClick}><li key={i}>{nav.name}</li></a>)}</ul>
          <div className="Menu-selection">
            {this.state.navbar.map((nav,i)=><p className={this.state.isShow === true ? "Active" : "Inactive"} key={i}>{nav.descrip}</p>)}
          </div>
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
          <MainContent />
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
