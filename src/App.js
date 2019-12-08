import React from 'react';
import { useBlockstack} from 'react-blockstack'
import { Blockstack } from 'react-blockstack/dist/context'
import Main from './Main.js';
import Landing from './Landing.js';

export default function App (props) {
  const { person, signIn } = useBlockstack()
  return (
  <Blockstack>
    <div className="jumbotron jumbotron-fluid pt-3 mb-0">
      <div className="container">
         {signIn && <Landing/>}
         {person && <Main person={person}/>}
      </div>
    </div>
  </Blockstack>
  )
}
