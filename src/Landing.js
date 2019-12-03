import React, { Component } from 'react'
import BlockstackContext from 'react-blockstack/dist/context'
import { BlockstackButton } from 'react-blockstack-button'

// Demonstrating BlockstackContext for legacy React Class Components.

export default class Landing extends Component {
  static contextType = BlockstackContext
  render () {
    const { signIn } = this.context
    return (
      <div className="panel-landing text-center mt-3">
        <h1 className="landing-heading">REBL One</h1>
        <p className="lead">
          A Foundation for Making Apps using React and Blockstack.
        </p>

        <p className="alert alert-info">
        REBL One is an open source project providing a minimalistic Blockstack
        app, with the purpose of <strong>helping software developers like you
        to quickly get going with Blockstack&nbsp;app&nbsp;development.</strong>
        </p>

        <div className="card mt-3 p-3">
          <p>Check out the REBL One starter app:</p>

          <p className="lead">
            <BlockstackButton onClick={ signIn }/>
          </p>

          <p className="mt-4">After signing in and authenticating with Blockstack,
          you'll be able to save a note to Blockstack's online storage, Gaia.
          That's it. You can build on this functionality to make amazing apps.</p>

        </div>


        <div className="card mt-3 p-3">

          <p>Assuming you have accounts
             on <a href="https://github.com">Github</a>&nbsp;
             and <a href="https://netlify.com">Netlify</a> you can
             automatically <strong>generate a website with your own clone of this app:</strong></p>
          <p>
            <a className="btn btn-outline-primary" type="button"
                   href="https://app.netlify.com/start/deploy?repository=https://github.com/REBL-Stack/starter-app"  >
              Deploy to Netlify
            </a>
          </p>

        </div>
      </div>
    )
  }
}
