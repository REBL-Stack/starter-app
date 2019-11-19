import React from 'react'
import { useBlockstack } from 'react-blockstack'

export default function Auth (props) {
  const { signOut } = useBlockstack()
  return (
    <button
      className="btn btn-primary btn-lg"
      id="signout-button"
      disabled={ !signOut }
      onClick={ signOut }>
      Logout
    </button>
    )
}
