import React from 'react';
import Stock from './Stock';



const StockList = (props) => {
  const stocks = props.stocks.map((el, ind)=> 
  <Stock  key={ind}
          symbol={el.symbol} 
          diff={(el.close - el.open).toFixed(3)} 
          open={el.open} 
          close={el.close} />);
  return (
    <div>
      <h3> Stocks Tracked </h3>
      {stocks}
    </div>
  );
  
}

export default StockList;