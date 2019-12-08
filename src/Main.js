import React, {useRef} from 'react'
import { useFile } from 'react-blockstack'

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

function Profile ({ person }) {
  return (
   <div className="Profile">
    <div className="avatar-section text-center">
      <img src={ (person && person.avatarUrl()) || avatarFallbackImage }
           className="img-rounded avatar" id="avatar-image" alt="Avatar"/>
    </div>
    <h1 className="text-center mt-2">
      Hello, <span id="heading-name">{ (person && person.name()) || 'App Developer' }</span>!
    </h1>
   </div>
  )
}

function NoteField ({title, path, placeholder}) {
  const [note, setNote] = useFile(path)
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
        <span className="input-group-text">{title}</span>
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
    <main className="panel-welcome mt-5">
      <div className="row">
        <div className="mx-auto col-sm-10 col-md-8 px-4">
          <Profile person={person}/>
        </div>
      </div>
      <div className="lead row mt-5">
        <div className="mx-auto col col-sm-10 col-md-8 px-4">
          <NoteField title="Note" path="note" placeholder="to yourself..."/>
        </div>

        <p className="alert alert-warning text-center col col-sm-10 col-md-8 mx-auto mt-5 px-5">
         Type text in the field above and click the Save button to store the note
         for next time you visit this page. Log out to get back to the Landing page where
         you can deploy your own clone of&nbsp;this&nbsp;app!
        </p>
      </div>
    </main>
  )
}
