import React from 'react';
import {Button, Input, Row} from 'react-materialize';

const Search = () => (
  <div>
    <Row >
      <Input placeholder="Enter Symbol or Company Name" s={8} label="Symbol Lookup" />
      <br/>
      <Button waves='light'>Search</Button>
    </Row>
  </div>
)

export default Search;