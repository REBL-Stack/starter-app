import React from 'react';
import { useBlockstack } from 'react-blockstack';
import { Blockstack } from 'react-blockstack/dist/context';
import Landing from './Landing';
import Main from './Main';

export default function App(props) {
  const { person, authenticated } = useBlockstack();
  const bs = useBlockstack();
  console.log("BS:", bs)
  return (
    <Blockstack>
      {!authenticated && <Landing/>}
      {person && <Main person={person} />}
    </Blockstack>
  );
}
