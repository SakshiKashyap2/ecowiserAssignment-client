import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Note from '../Note/Note';

const PinnedNote = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/api/note/pin`)
      .then((response) => {
        setNotes(response.data.allPinnedNotes);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Pinned Note</h1>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem._id}
            title={noteItem.noteTitle}
            content={noteItem.noteBody}
            isPinned={noteItem.isPinned}
            // onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
};

export default PinnedNote;
