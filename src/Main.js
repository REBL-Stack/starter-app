import React, {useRef} from 'react'
import { useFile } from 'react-blockstack'

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

function Profile ({ person }) {
  return (
   <div className="Profile">
    <div className="avatar-section">
      <img src={ (person && person.avatarUrl()) || avatarFallbackImage }
           className="img-rounded avatar" id="avatar-image" alt="Avatar"/>
    </div>
    <h1>Hello, <span id="heading-name">{ (person && person.name()) || 'Nameless Person' }</span>!</h1>
   </div>
  )
}

function NoteField ({placeholder}) {
  const [note, setNote] = useFile("note")
  const textfield = useRef()
  const spinner = useRef()
  const saveAction = () => {
    spinner.current.classList.remove('d-none')
    setNote(textfield.current.value)
    setTimeout(() => spinner.current.classList.add('d-none'), 1500)
  }
  return(
    <div className="NoteField input-group ">
      <div className="input-group-prepend">
        <span className="input-group-text">Note</span>
      </div>
      <input type="text" ref={textfield} className="form-control" disabled={note === undefined}
             defaultValue={ note || ""} placeholder={placeholder}
             onKeyUp={(e) => {if (e.key === "Enter") saveAction()}}/>
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button"
                disabled={!setNote} onClick={saveAction}>
          <div ref={spinner} role="status"
               className="d-none spinner-border spinner-border-sm text-info align-text-top mr-2"/>
          Save
        </button>
      </div>
    </div>
  )
}

export default function Main ({ person }) {
  return (
    <main className="panel-welcome">
      <div className="text-center">
        <Profile person={person}/>
      </div>
      <div className="lead row mt-5">
        <div className="mx-auto col-md-8 col-lg-6 px-3">
          <NoteField placeholder="to your future self..."/>
        </div>
      </div>
    </main>
  )
}
