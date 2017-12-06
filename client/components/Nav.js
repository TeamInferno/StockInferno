import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import {Navbar, NavItem} from 'react-materialize';

const Nav = () => (
  <div>
    <Navbar brand='Inferno Stocks' right>
      <NavItem><Link to='/home'>Portfolio</Link></NavItem>
      <NavItem><Link to='/graph'>Graphs</Link></NavItem>
    </Navbar>
    
  </div>
)

export default Nav;