import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Fragment>
      <h1 className="App-title">Liam Purcell</h1>
      <div className="navDiv">
        <ul className="naviList" id="navi">
          <li>
            <Link to="/home" data-test-id="home">
              home
            </Link>
          </li>
          <li>
            <Link to="/music" data-test-id="music">
              music
            </Link>
          </li>
          <li>
            <Link to="/resume" data-test-id="resume">
              resume
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/purcelllj/ljpcom"
              target="_blank"
              data-test-id="project"
            >
              link to project
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Nav;
