import React, { Fragment, Component } from 'react'

export default class Music extends Component {
  constructor() {
    super();
    this.state = {
      title: ''
    };
  }

  componentDidMount() {
    const options = {
      method: 'GET',
      cache: 'default'
    };

    const url = '/music';

    fetch(url, options)
      .then(result => result.text())
      .then(content => this.setState({ title: content }));
  }

  render() {
    const source = this.state.title;

    return (
      <Fragment>
        <div className="audio">
          <h3>{this.state.urls}</h3>
          <audio className="player" src="" controls />
        </div>
      </Fragment>
    );
  }
}
