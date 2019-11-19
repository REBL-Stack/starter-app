import React from 'react'
import Auth from './Auth'

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

export default function Profile ({ person }) {
  return (
    <div className="panel-welcome" id="section-2">
      <div className="avatar-section">
        <img src={ (person && person.avatarUrl()) || avatarFallbackImage }
             className="img-rounded avatar" id="avatar-image" alt="Avatar"/>
      </div>
      <h1>Hello, <span id="heading-name">{ (person && person.name()) || 'Nameless Person' }</span>!</h1>
      <p className="lead">
        <Auth/>
      </p>
    </div>
  )
}
