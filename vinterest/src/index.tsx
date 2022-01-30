import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './HomePage';
import Suggestions from './Suggestions';
import Chatbot from './Chatbot';
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";

function App(){
  return (
    <Router>
        <Switch>
          <Route path="/chat">
            <Chatbot />
          </Route>
          <Route path="/suggestions">
            <Suggestions data={null}/>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
    </Router>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));

