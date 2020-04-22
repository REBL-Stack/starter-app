import React from 'react';
import { useBlockstack } from 'react-blockstack';
import { Blockstack } from 'react-blockstack/dist/context';
import Landing from './Landing';
import Main from './Main';

export default function App(props) {
  const { person, authenticated } = useBlockstack();
  return (
    <Blockstack>
      {!authenticated && <Landing/>}
      {person && <Main person={person} />}
    </Blockstack>
  );
}
