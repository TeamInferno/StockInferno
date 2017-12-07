import React from 'react';
import { Link } from 'react-router-dom';

const Stock = (props) => {

  const arrow = props.diff >= 0 ? "stock green" : "stock red"
  return (
    <div className={arrow}>
      <strong>{props.symbol}</strong> Change: {props.diff}    Open: {props.open}    Close: {props.close} <Link to={`/graph/${props.symbol}`}>Go To Graph</Link>  
    </div>
  );
}

export default Stock;