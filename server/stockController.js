const db = require('./model');
const axios = require('axios');
const API_KEY = 'TNZ30MMRG0RXZHPZ';

const stockController = {};

stockController.getUserStocks = (req, res, next) => {
  const user = res.locals.user;
  db.query(
    `SELECT * FROM stocks s
    JOIN users_stocks us ON us.stock_id = s._id
    JOIN users u ON us.user_id = u._id
    WHERE u.username = $1`, [user.username]
  )
  .then(result => {
    res.locals.stocks = result.rows;
    next();
  })
  .catch(err => console.error('Error getting users stocks', err.stack));
};

stockController.addStock = (req, res, next) => {
  // Get stock symbol from the request
  const symbol = req.params.symbol;

  // Call stock API to get data
  axios.get(
    `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=15min&apikey=${API_KEY}`,
  )

  // Parse data 
  .then(res => {
    const dataPoints = [];
    const data = res.data['Time Series (15min)'];
    for (key in data) {
      dataPoints.push({time: key, open: data[key]['1. open'], close: data[key]['4. close']});
    }
    res.locals.stockInfo = dataPoints[0];
  });
};

module.exports = stockController;