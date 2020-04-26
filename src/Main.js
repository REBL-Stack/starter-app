import React, { useRef } from 'react';
import { useFile } from 'react-blockstack';
import Profile from './Profile'

function NoteField({ title, path, placeholder }) {
  const [note, setNote] = useFile(path);
  const textfield = useRef();
  const spinner = useRef();
  const saveAction = () => {
    spinner.current.classList.remove('d-none');
    setNote(textfield.current.value);
    setTimeout(() => spinner.current.classList.add('d-none'), 1500);
  };
  return (
    <div className="NoteField input-group ">
      <div className="input-group-prepend">
        <span className="input-group-text">{title}</span>
      </div>
      <input
        type="text"
        ref={textfield}
        className="form-control"
        disabled={note === undefined}
        defaultValue={note || ''}
        placeholder={placeholder}
        onKeyUp={e => {
          if (e.key === 'Enter') saveAction();
        }}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          disabled={!setNote}
          onClick={saveAction}
        >
          <div
            ref={spinner}
            role="status"
            className="d-none spinner-border spinner-border-sm text-info align-text-top mr-2"
          />
          Save
        </button>
      </div>
    </div>
  );
}

export default function Main(props) {
  return (
    <main className="panel-welcome mt-5 container">
      <div className="row">
        <div className="mx-auto col-sm-10 col-md-8 px-4">
          <Profile/>
        </div>
      </div>
      <div className="lead row mt-5">
        <div className="mx-auto col col-sm-10 col-md-8 px-4">
          <NoteField title="Note" path="note" placeholder="to yourself..." />
        </div>

        <div className="card col-xs-10 col-md-8 mx-auto mt-5 text-center px-0 border-warning">
          <div className="card-header">
            <h5 className="card-title">Instructions</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Type any text in the field above.</li>
            <li className="list-group-item">
              Press the <i>Enter</i> key or click the <i>Save</i> button to
              store the note.
            </li>
            <li className="list-group-item">
              Reload the page to confirm that the text is retained.
            </li>
          </ul>
        </div>
        <div className="alert alert-warning text-center col col-sm-10 col-md-8 mt-3 mx-auto px-5">
          <h5>Next Step</h5>
          <p>
            Log out to get back to the Landing page where you can deploy your
            own clone of&nbsp;this&nbsp;app as a starting point for your own
            Blockstack apps.
          </p>
        </div>
      </div>
    </main>
  );
}
