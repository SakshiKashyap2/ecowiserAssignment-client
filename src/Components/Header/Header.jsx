import React from 'react';
import './Header.css';
// import HighlightIcon from '@mui/icons-material/Highlight';
import HighlightIcon from '@mui/icons-material/Highlight';

function Header() {
  return (
    <div className="Header">
      <header>
        <h1>
          <HighlightIcon />
          Keeper
        </h1>
      </header>
    </div>
  );
}

export default Header;
