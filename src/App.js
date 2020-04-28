import React from 'react';
import { useBlockstack } from 'react-blockstack';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from './Landing';
import Main from './Main';

export default function App(props) {
  const { person, authenticated } = useBlockstack();
  return (
    <div className="App">
      <Router>
        {!authenticated && <Landing/>}
        {person && <Main person={person} />}
      </Router>
    </div>
  );
}
