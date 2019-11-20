import React, {useRef} from 'react'
import { useFile } from 'react-blockstack'

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

export default function Profile ({ person }) {
  const [note, setNote] = useFile("note")
  const textfield = useRef()
  const spinner = useRef()
  const saveAction = () => {
    spinner.current.classList.remove('hide')
    setNote(textfield.current.value)
    setTimeout(() => spinner.current.classList.add('hide'), 2000)
  }
  return (
    <div className="panel-welcome" id="section-2">
      <div className="avatar-section">
        <img src={ (person && person.avatarUrl()) || avatarFallbackImage }
             className="img-rounded avatar" id="avatar-image" alt="Avatar"/>
      </div>
      <h1>Hello, <span id="heading-name">{ (person && person.name()) || 'Nameless Person' }</span>!</h1>
      <div className="lead row mt-5">
        <div className="input-group mx-auto col-md-6 col-lg-4">
          <div className="input-group-prepend">
            <span className="input-group-text">Note</span>
          </div>
          <input type="text" ref={textfield} className="form-control" disabled={note === undefined}
                 defaultValue={ note || ""} placeholder="Note to your future self..."/>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button"
                    disabled={!setNote} onClick={saveAction}>
              <div ref={spinner} role="status"
                   className="hide spinner-border spinner-border-sm text-info align-text-top mr-2"/>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
