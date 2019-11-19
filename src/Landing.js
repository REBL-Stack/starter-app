import React, { Component } from 'react'
import BlockstackContext from 'react-blockstack/dist/context'

// Demonstrating Blockstack Context for compatibility with React Class Components

export default class Landing extends Component {
  static contextType = BlockstackContext
  render () {
    const { signIn } = this.context
    return (
      <div className="panel-landing" id="section-1">
        <h1 className="landing-heading">Hello, Blockstack!</h1>
        <p className="lead">
          <button
            className="btn btn-primary btn-lg"
            id="signin-button"
            disabled={ !signIn }
            onClick={ signIn }>
            Sign In with Blockstack
          </button>
        </p>
      </div>
    )
  }
}
