import React from 'react';
import PinnedNote from '../PinnedNote/PinnedNote';

import UnpinnedNote from '../UnpinnedNote/UnpinnedNote';

const NoteSection = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
      className="noteSection"
    >
      <PinnedNote />
      <br />
      <br />
      <UnpinnedNote />
    </div>
  );
};
export default NoteSection;
