import React, { Component } from 'react';
import BlockstackContext from 'react-blockstack/dist/context';

// Demonstrating BlockstackContext for legacy React Class Components.

export default class Profile extends Component {
  static contextType = BlockstackContext;
  render() {
    const { person } = this.context;
    const avatarFallbackImage =
      'https://s3.amazonaws.com/onename/avatar-placeholder.png';
    const proxyUrl = (url) => "/proxy/" + url.replace(/^https?:\/\//i, "")
    return (
      <div className="Profile">
        <div className="avatar-section text-center">
          <img
            src={proxyUrl((person && person.avatarUrl()) || avatarFallbackImage)}
            className="img-rounded avatar"
            id="avatar-image"
            alt="Avatar"
          />
        </div>
        <h1 className="text-center mt-2">
          Hello,{' '}
          <span id="heading-name">
            {(person && person.name()) || 'App Developer'}
          </span>
          !
        </h1>
      </div>
    );
  }
}

