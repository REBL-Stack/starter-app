import React, { Component } from 'react'
import BlockstackContext from 'react-blockstack/dist/context'
import { BlockstackButton } from 'react-blockstack-button'

// Demonstrating BlockstackContext for legacy React Class Components.

export default class Landing extends Component {
  static contextType = BlockstackContext
  render () {
    const { signIn } = this.context
    return (
      <div className="panel-landing text-center mt-1">
        <h1 className="landing-heading">REBL One</h1>
        <p className="lead">
          A Foundation for Making Apps using React and Blockstack.
        </p>

        <p>This starter app has the minimal functionality of a Blockstack
        app, with the purpose to <strong>help web app developers like you
        to quickly get going with Blockstack&nbsp;app&nbsp;development.</strong></p>

        <p>This website demonstrates the basic functionality of the starter app.
        TLDR; not much: After signing in and authenticating with Blockstack,
        you'll be able to save a note to Blockstack's online storage, Gaia.
        Next time you sign on or reload the page, your note will be retrieved
        and displayed.
        That's it. But you can build on this functionality to make amazing apps.</p>

        <div className="alert alert-info">
        <p>Basic Requirements for development:
        <ol>
        <li>Account on Github</li>
        <li>npm (Node Package Manager) installed on your computer</li>
        <li>Account on Netlify or other web hosting service</li>
        </ol>
        </p>
        </div>

        <p>This is an Open Source project
        with <a href="https://github.com/REBL-Stack/starter-app">sources</a> publicly
        available on github.</p>

        <div className="alert alert-info">
        <p>To check out the basic functionality provided by the starter app:</p>

        <p className="lead">
          <BlockstackButton onClick={ signIn }/>
        </p>
        </div>
      </div>
    )
  }
}
