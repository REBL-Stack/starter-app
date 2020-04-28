import React from 'react';
import ReactDOM from 'react-dom';
import { AppConfig } from 'blockstack';
import ReactBlockstack from 'react-blockstack';
import { Blockstack } from 'react-blockstack/dist/context';
import App from './App.js';
import Auth from './Auth.js';

// Require Sass file so webpack can build it
import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.css';

const appConfig = new AppConfig();
// eslint-disable-next-line
const blockstack = ReactBlockstack(appConfig);

ReactDOM.render(
    <Blockstack>
      <App />
    </Blockstack>,
  document.getElementById('App')
);
ReactDOM.render(<Auth />, document.getElementById('Auth'));
