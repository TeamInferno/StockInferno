import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StockList from './StockList';

const Portfolio = (props) => (
  <div>
    <h2>Portfolio</h2>
    <StockList stocks={props.stocks} />
  </div>
);

export default Portfolio;