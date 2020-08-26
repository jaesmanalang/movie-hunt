import React from 'react';
import { useHistory } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const history = useHistory();
  return (
    <header className="header">
      <h1 className="logo" onClick={() => history.push('/')}>
        MovieHunt
      </h1>
    </header>
  );
};

export default Navbar;
