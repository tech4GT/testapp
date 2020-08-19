import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as _ from 'antd';
import * as __ from '@material-ui/core'
import * as vic from 'victory'
import * as vis from 'react-vis';


const rechart = require('recharts');

function App() {
  return (
    <div className="App">
      <vic.VictoryPie />
      <_.Button>I'm a button</_.Button>
      <__.Button>I'm also a button</__.Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
