import React from 'react';
import {Button, Input, Row, Col} from 'react-materialize'

const Profile = (props) => (
  <div className="profile">
    <p>Welcome {props.user}</p> <br/>
    (<a href="/">Logout</a>)<br/>
    <img className="profilePic" src="https://media.giphy.com/media/ryfqQgxEdpUAw/giphy.gif"/>

  </div>
)

export default Profile;