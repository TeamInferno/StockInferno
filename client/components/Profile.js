import React from 'react';
import {Button, Input, Row, Col} from 'react-materialize'

const Profile = (props) => (
  <div className="profile">
    <p>Welcome {props.user}</p>
    <a href="/">Logout</a>
  </div>
)

export default Profile;