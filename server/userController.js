// const bcrypt = require('bcrypt');
const db = require('./model');

const SALT_WORK_FACTOR = 10;

const userController = {}

userController.getAllUsers = (req, res, next) => {
  db.query('SELECT * FROM users')
  .then((result) => {
    console.log(result.rows);
    db.end();
    next();
  })
  .catch(err => console.error('Error getting all users', err.stack));
};

userController.getUser = (req, res, next) => {
  db.query('SELECT * FROM users WHERE username = $1', [req.body.username])
    .then(result => {
      console.log(result.rows);
      db.end();
      next();
    })
    .catch(err => console.error('Error getting user', err.stack));
};

userController.createUser = (req, res, next) => {
  db.query('INSERT INTO users (name, username, password) VALUES ($1, $2, $3)',
    [req.body.name, req.body.username, req.body.password])
    .then(result => {
      console.log(result);
      db.end();
      next();
    })
    .catch(err => console.error('Error creating user', err.stack));
};

userController.deleteUser = (req, res, next) => {
  db.query('DELETE FROM users WHERE username = $1', [req.body.username])
    .then()
};

// userController.getAllUsers();
// userController.getUser({ body: { username: 'ryan' } }, null, () => {});
// userController.createUser(
//   { body: { name: 'Santa Claus', username: 'santa', password: 'corn' } }, 
//   null, 
//   () => {}
// );

module.exports = userController;
