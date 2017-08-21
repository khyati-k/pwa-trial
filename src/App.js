import React, { Component } from 'react';
//import { Router, browserHistory, Route, Link } from 'react-router';
import axios from 'axios';

import logo from './logo.svg';
//import './App.css';
//import Routes from './routes.js';
import Box from './component/box.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('https://api.tvmaze.com/schedule/full').then(function (response) {
      this.setState({ data: response.data.slice(0, 20) });
    }.bind(this));
  }

  render() {
    let data = this.state.data;
    return (
      <div>
        <div className="navbar">
          <h1>TV SCHEDULE</h1>
        </div>

        <h1>On TV tonight</h1>
        <Box data={data} />

        <div className="footer">
          <h3>
            created using <a href="https://www.tvmaze.com/"> TVMaze API</a>
          </h3>
        </div >
      </div>
    );
  }
}

export default App;