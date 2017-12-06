import React from 'react';
import {Button, Input, Row} from 'react-materialize';

const Search = (props) => (
  <div>
    <Row >
      <form onSubmit={props.addStock}>
        <input type="text" name="symbol" placeholder="Enter Symbol" s={8} label="Add Symbol" />
        <br/>
        <Button type="submit" value="submit">Add</Button>
        {/* <Button onSubmit={props.addStock} type="submit" waves='light'>Submit</Button> */}
      </form>
    </Row>
  </div>
)

export default Search;