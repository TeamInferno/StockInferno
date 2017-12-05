import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StockList from './StockList';

const Portfolio = () => (
  <div>
    <h2>Hello Portfolio</h2>
    <StockList />
  </div>
);

export default Portfolio;