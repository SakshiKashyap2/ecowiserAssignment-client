import React, { useState } from 'react';
// import AddIcon from '@material-ui/icons/Add';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import axios from 'axios';
// import Fab from '@material-ui/core/Fab';
// import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  async function submitNote(event) {
    event.preventDefault();
    await axios
      .post('/api/note/', {
        title: note.title,
        content: note.content,
      })
      .then((response) => {
        console.log(response);
        setNote({
          title: '',
          content: '',
        });
        setExpanded(false);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        {
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        }
      </form>
    </div>
  );
}

export default CreateArea;
