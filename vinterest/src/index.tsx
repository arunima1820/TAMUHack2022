import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './HomePage';
import Suggestions from './Suggestions';
ReactDOM.render(
  <React.StrictMode>
    <Suggestions data={null}/>
  </React.StrictMode>,
  document.getElementById('root')
);
