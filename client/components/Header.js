import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = () => (
  <div>
    <h1>Hello Header</h1>
    <p>Has username, log out button, nav bar and maybe search button</p>
    <Nav />
  </div>
)

export default Header;