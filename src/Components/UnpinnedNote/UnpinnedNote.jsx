import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Note from '../Note/Note';
import Pagination from '../Pagnation/Pagination';
import './UnpinnedNote.css';

const UnpinnedNote = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(6);

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/api/note/`)
      .then((response) => {
        setNotes(response.data.allNotes);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Pagination config
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = notes.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(notes.length / recordsPerPage);

  return (
    <div className="unpinnedNotes">
      <h1 className="note-head">Un-pinned Note</h1>
      <br />
      <div className="grid-container">
        {currentRecords.map((noteItem, index) => {
          return (
            <div className="grid-item">
              <Note
                key={index}
                id={noteItem._id}
                title={noteItem.noteTitle}
                content={noteItem.noteBody}
                isPinned={noteItem.isPinned}
              />
            </div>
          );
        })}
      </div>
      <div className="pagination">
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default UnpinnedNote;
