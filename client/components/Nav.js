import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div>
    <h2> Hello Nav </h2>
    <ul>
      <li><Link to='/home'>Portfolio</Link></li>
      <li><Link to='/graph'>Graphs</Link></li>
    </ul>
  </div>
)

export default Nav;