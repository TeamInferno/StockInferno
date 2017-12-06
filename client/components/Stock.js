import React from 'react';



const Stock = (props) => {

  const arrow = props.diff >= 0 ? "stock green" : "stock red"
  return (
    <div className={arrow}>
      {props.symbol} {props.diff} {props.open} {props.close}
      
    </div>
  );
}

export default Stock;