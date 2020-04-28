import React, { useRef } from 'react';
import { useFile } from 'react-blockstack';

export default function NoteField({ title, path, placeholder }) {
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
