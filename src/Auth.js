import React from 'react'

export default function Auth ({ signOut }) {
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
