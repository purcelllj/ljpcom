import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <h1 className="App-title">Liam Purcell</h1>
            <div className="navDiv">
              <ul className="naviList" id="navi">
                <li><Link to='/home'>About</Link></li>
                <li><Link to='/music'>Music</Link></li>
                <li><Link to='/resume'>Resume</Link></li>
              </ul>
            </div>
        </div>
    )
}

export default Nav;