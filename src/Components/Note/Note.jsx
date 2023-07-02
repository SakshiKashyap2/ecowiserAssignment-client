import React from 'react';
import SellIcon from '@mui/icons-material/Sell';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';
import './Note.css';

import EditIcon from '@mui/icons-material/Edit';
import Swal from 'sweetalert2';

function Note(props) {
  async function handleClick() {
    await axios
      .post(`${process.env.REACT_APP_SERVER}/api/note/delete`, {
        _id: props.id,
      })
      .then((response) => {
        console.log(response);
        window.location.reload(false);
        document.getElementsByClassName('noteSection').reload();
      })
      .catch((error) => console.log(error));
  }

  const pinNote = () => {
    const pinStatus = Boolean(props.isPinned) === true ? false : true;
    // alert(pinStatus);
    axios
      .post(`${process.env.REACT_APP_SERVER}/api/note/pin`, {
        _id: props.id,
        pinStatus: pinStatus,
      })
      .then((response) => {
        // alert('reload');
        window.location.reload(true);
      })
      .catch((e) => console.log(e));
  };

  const editNote = async () => {
    await Swal.fire({
      title: 'Edit Note',
      html:
        `<input id="swal-input1" class="swal2-input" placeholder="Edit Ttile" value=${props.title}>` +
        `<textarea id="swal-input2" class="swal2-textarea" placeholder="Edit Content">${props.content}</textarea>`,
      focusConfirm: true,
      showCancelButton: true,
      confirmButtonText: 'Save Changes',
      confirmButtonColor: '#F5BA13',
      cancelButtonText: 'Cancel',
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        await axios
          .patch(`${process.env.REACT_APP_SERVER}/api/note`, {
            _id: props.id,
            title: document.getElementById('swal-input1').value,
            content: document.getElementById('swal-input2').value,
          })
          .then((response) => {
            window.location.reload();
          })
          .catch((error) => console.log(error));
      },
    });
  };

  const isPinned = Boolean(props.isPinned);

  return (
    <div className="note">
      <div className="pinBox">
        <div
          style={{ width: 'fit-content', cursor: 'pointer' }}
          onClick={editNote}
        >
          <EditIcon />
        </div>
        <div
          style={{ width: 'fit-content', cursor: 'pointer' }}
          onClick={pinNote}
        >
          {isPinned === true ? <CancelIcon /> : <SellIcon />}
        </div>
      </div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
