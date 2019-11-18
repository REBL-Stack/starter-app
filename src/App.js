import React from 'react';
import { useBlockstack} from 'react-blockstack'
import { Blockstack } from 'react-blockstack/dist/context'
import Profile from './Profile.js';
import Landing from './Landing.js';

export default function App (props) {
  const { person, signIn } = useBlockstack()
  return (
  <Blockstack>
    <div className="site-wrapper">
      <div className="site-wrapper-inner">
         {signIn && <Landing />}
         {person && <Profile person={person} />}
      </div>
    </div>
  </Blockstack>
  )
}
