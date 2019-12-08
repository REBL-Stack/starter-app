import React, { Component } from 'react'
import BlockstackContext from 'react-blockstack/dist/context'
import { BlockstackButton } from 'react-blockstack-button'

// Demonstrating BlockstackContext for legacy React Class Components.

export default class Landing extends Component {
  static contextType = BlockstackContext
  render () {
    const { signIn } = this.context
    return (
    <div className="Landing">
      <div className="jumbotron jumbotron-fluid pt-3 mb-0">
        <div className="container">
           <div className="panel-landing text-center mt-3">
            <h1 className="landing-heading">REBL One</h1>
            <p className="lead">
              A Foundation for Making Apps using React&nbsp;and&nbsp;Blockstack.
            </p>

            <p className="alert alert-info  border-info">
            REBL One is
            an <a href="https://github.com/REBL-Stack/starter-app" target="_blank">open
            source</a> project providing a minimalistic Blockstack
            starter app, with the purpose of <strong>helping software developers like you
            to quickly get going with Blockstack&nbsp;app&nbsp;development.</strong>
            </p>

            <div className="card mt-3 border-info">
              <div className="card-header">
                <h5 className="card-title">
                  About Blockstack
                </h5>
              </div>
              <div className="row">
                <div className="col col-md-6 p-4 text-right border-right">
                  <a href="https://blockstack.org/about" target="_blank">
                  Blockstack PBC</a> is a New York based public benefit corporation,
                creating a decentralized computing network and app ecosystem designed
                to protect digital rights including privacy and data ownership.
                </div>
                <div className="col col-md-6 p-4 text-left border-left">
                  <a href="https://app.co/mining" target="_blank">Blockstack awards
                  more than $200K/month</a> to the best apps on the platform, increasing
                  to a million dollars a month from May 2020.
                  Use REBL One to make your app and start earning a share already next&nbsp;month.
                </div>
              </div>
            </div>

            <div className="card mt-3 border-info">
              <div className="card-header">
                <h5 className="card-title">
                  Check out the REBL One starter&nbsp;app:
                </h5>
              </div>
              <div className="card-body">
                <p className="card-link">
                  <BlockstackButton onClick={ signIn }/>
                </p>

                <p className="card-text mt-3">
                After signing in and authenticating with Blockstack,
                you'll be presented with profile information and be able
                to save a note to Blockstack's online storage, Gaia. That's&nbsp;it. </p>
              </div>

              <div className="card-footer">
                  You can build on this functionality to make amazing&nbsp;apps.
              </div>

            </div>


            <div className="card mt-3  border-primary">
              <div className="card-header">
                <h5 classNme="card-title">Quick Start</h5>
              </div>
              <div className="card-body">
                <p className="card-text">Assuming you have accounts
                   on <a href="https://github.com" target="_blank">Github</a>&nbsp;
                   and <a href="https://netlify.com" target="_blank">Netlify</a> you can
                   automatically <strong>generate a website with your&nbsp;own&nbsp;clone&nbsp;of&nbsp;this&nbsp;app:</strong></p>
              </div>
              <div className="card-footer">
                <a className="btn btn-secondary p-0" type="button" target="_blank"
                       href="https://app.netlify.com/start/deploy?repository=https://github.com/REBL-Stack/starter-app">
                  <img src="https://www.netlify.com/img/deploy/button.svg"
                       alt="&nbsp;Deploy to Netlify&nbsp;"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
