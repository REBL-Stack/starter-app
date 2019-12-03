import React from 'react'
import { useBlockstack } from 'react-blockstack'

export default function Auth (props) {
  const { signIn, signOut } = useBlockstack()
  return (
    <button
      className="btn btn-primary btn-lg"
      disabled={ !signIn && !signOut }
      onClick={ signIn || signOut }>
      {signIn ? "Sign In" : signOut ? "Log Out" : "..."}
    </button>
    )
}
