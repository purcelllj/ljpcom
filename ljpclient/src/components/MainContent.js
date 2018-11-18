import React, { Fragment, Component } from 'react';
import { spawn } from 'child_process';

export default class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      navbar: [],
      isShow: false,
      page: 'About',
      aboutDetails: '',
      musicDetails: '',
      contactDetails:''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount(){
    const options = {
      method: 'GET',
      cache: 'default'
    }

    const url = '/home'

    fetch(url, options)
      .then(result => result.json())
      .then(navbar => this.setState({navbar:navbar}));
  }

  //handle nav link click events
  handleClick(page) {
    this.setState( () => {
        return { page };
    }, () => this.state.page === 'Music' ? this.setState({isShow: true}) : this.setState({isShow: false}));
  }

  

  render(){
    
    

    const scPlaylist = (
        <div >
            <iframe 
                width="60%" height="450" scrolling="no" allow="autoplay" 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/197252296&color=%23161715&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
            </iframe>
        </div>
    )

    const navLinks = this.state.navbar.map(
      (nav, i) => (
        <a key={i} id="navName" onClick={() => this.handleClick(nav.name)}>
          <li >{nav.name}</li>
        </a>
      )
    );

    const description = this.state.navbar.filter(
      (nav) => nav.name === this.state.page 
    ).map(
      (nav, i) => {
        const showPTag = nav.name === 'Contact' ? 'hiddenContent' : 'SectionContent';
        const showAnchor = nav.name === 'Contact'? 'SectionContent' : 'hiddenContent'
        return (
          <div key={i}> 
            <h2 className="SectionHeader">{nav.name}</h2>
            <p className={showPTag}>{nav.descrip}</p>
            <span className={showAnchor}>Phone:<a href="tel:{nav.phone}">{nav.Phone}</a></span>
            <span className={showAnchor}>Email:<a href="mailto:{nav.Email}">{nav.Email}</a></span>
          </div>
        )
      }
    );

    return (
        <Fragment>
          <h1 className="App-title">Liam Purcell</h1>
          <div className="navDiv">
            <ul className="naviList" id="navi">{navLinks}</ul>
            <div className="Menu-selection">
              {description}
            </div>
          </div>
          <div className="Menu-selection">
             {this.state.isShow ? scPlaylist : null} 
          </div>
        </Fragment>
    );
  }
};
