import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './HomePage';
import Suggestions from './Suggestions';
import Chatbot from './Chatbot';
ReactDOM.render(
  <React.StrictMode>
    <Chatbot/>
    {/* <Suggestions data={null}/> */}
  </React.StrictMode>,
  document.getElementById('root')
);
