const { Pool } = require('pg');

const db = new Pool({
  host: 'localhost',
  database: 'stocktest',
  user: 'student',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// db.query('SELECT * FROM users')
//   .then((res) => console.log(res.rows[0].name))
//   .catch(err => console.error('Error executing query', err.stack));

module.exports = db;