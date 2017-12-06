const bcrypt = require('bcrypt');
const db = require('./model');

const SALT_WORK_FACTOR = 10;

const userController = {}

userController.getUser = (req, res, next) => {
  db.query('SELECT * FROM users WHERE username = $1', [req.body.username])
    .then(result => {
      // Attach to returned user res.locals for validation in other middleware
      res.locals.user = result.rows[0];
      db.end();
      next();
    })
    .catch(err => console.error('Error getting user', err.stack));
};

userController.validateUser = (req, res, next) => {
  const user = res.locals.user;
  if (!user || !(bcrypt.compareSync(req.user.password, user.password))) {
    res.status(401).redirect('/signup');
  } else {
    res.locals.sessionId = user._id;
    next();
  }
};

userController.createUser = (req, res, next) => {
  const password = bcrypt.hashSync(req.body.password, SALT_WORK_FACTOR);
  db.query('INSERT INTO users (name, username, password) VALUES ($1, $2, $3)',
    [req.body.name, req.body.username, password])
    .then(result => {
      console.log(result);
      db.end();
      next();
    })
    .catch(err => console.error('Error creating user', err.stack));
};

// userController.deleteUser = (req, res, next) => {
//   db.query('DELETE FROM users WHERE username = $1', [req.body.username])
//     .then()
// };

module.exports = userController;
