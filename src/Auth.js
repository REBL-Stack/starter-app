import React, { useCallback } from 'react';
import { useBlockstack, useConnectOptions } from 'react-blockstack';
import { connectOptions } from './UserSession';
import { showBlockstackConnect } from '@blockstack/connect/dist/connect.cjs.production.min';

// Authentication button adapting to status

export default function Auth(props) {
  const { signIn, signOut, userSession } = useBlockstack();
  const authOptions = useConnectOptions(connectOptions(userSession));
  const buttonAction = useCallback(() => {
    signIn ? showBlockstackConnect(authOptions) : signOut();
  }, [signIn, authOptions, signOut]);

  return (
    <button
      className="btn btn-primary btn-lg"
      disabled={!signIn && !signOut}
      onClick={buttonAction}
    >
      {signIn ? 'Sign In' : signOut ? 'Log Out' : '...'}
    </button>
  );
}
