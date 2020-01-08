import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactBlockstack from 'react-blockstack';
import { AppConfig } from 'blockstack';
import App from './App.js';
import Auth from './Auth.js';

// Require Sass file so webpack can build it
import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.css';

const appConfig = new AppConfig();
const blockstack = ReactBlockstack(appConfig);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('App')
);
ReactDOM.render(<Auth />, document.getElementById('Auth'));
