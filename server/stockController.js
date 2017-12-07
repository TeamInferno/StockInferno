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
  const symbol = req.body.symbol;
  const username = req.body.username;

  console.log(symbol, username);

  // Call stock API to get data
  axios.get(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`,
  )

  // Parse data 
  .then(apiRes => {
    const dataPoints = [];
    const data = apiRes.data['Time Series (Daily)'];
    for (key in data) {
      dataPoints.push({time: key, open: data[key]['1. open'], close: data[key]['4. close']});
    }
    console.log(dataPoints[0]);
    res.locals.stockInfo = dataPoints[0];
    next();
  });
};

module.exports = stockController;