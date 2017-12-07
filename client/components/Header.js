import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Profile from './Profile';
import Search from './Search';
import {Button, Input, Row, Col, Container} from 'react-materialize';

const Header = (props) => (
  <div>
    <Row>
      <Nav />
    </Row>
    <Row>
    <Col s={9}>
        <Search addStock={props.addStock} />
      </Col>
      <Col s={3}>
        <Profile user={props.user}/>
      </Col>
    </Row>
  </div>
)

export default Header;