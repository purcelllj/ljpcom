import React, { Component } from 'react';
import './App.css';

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      navbar: [],
      isShow: false,
      page: 'About'
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

  handleClick(page) {
    this.setState( () => {
      return { page };
    })
  }


  render(){
    const navLinks = this.state.navbar.map(
      (nav, i) => (
        <a key={i} onClick={() => this.handleClick(nav.name)}>
          <li >{nav.name}</li>
        </a>
      )
    );

    const description = this.state.navbar.filter(
      (nav) => nav.name === this.state.page
    ).map(
      (nav, i) => (
        <div key={i}> 
          <h2 className="SectionHeader">{nav.name}</h2>
          <p className="SectionContent">{nav.descrip}</p>
        </div>
      )
    );

    return (
      <div>
        <h1 className="App-title">Liam Purcell</h1>
        <div className="navDiv">
          <ul className="naviList" id="navi">{navLinks}</ul>
          <div className="Menu-selection">
            {description}
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
