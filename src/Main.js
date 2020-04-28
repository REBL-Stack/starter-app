import React from 'react';
import Profile from './Profile';
import NoteField from './NoteField';

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
