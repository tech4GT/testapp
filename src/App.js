import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Antd from 'antd';
import * as Mat from '@material-ui/core'
import * as vic from 'victory'
import * as vis from 'react-vis';


const rechart = require('recharts');

function App() {
  return (
    <div className="App">
    <vic.VictoryPie />
    <Antd.Button>I'm a button</Antd.Button>
    <Mat.Button>I'm also a button</Mat.Button>
    <vis.XYPlot
    width={300}
    height={300}>
    </vis.XYPlot>
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
  