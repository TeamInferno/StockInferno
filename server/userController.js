const bcrypt = require('bcryptjs');
const db = require('./model');

const SALT_WORK_FACTOR = 10;

const userController = {}

userController.getUser = (req, res, next) => {
  db.query('SELECT * FROM users WHERE username = $1', [req.body.username])
    .then(result => {
      console.log('getUser request body:', req.body)
      res.locals.user = result.rows[0];
      next();
    })
    .catch(err => console.error('Error getting user', err.stack));
};

userController.validateUser = (req, res, next) => {
  const user = res.locals.user;
  if (!user || !(bcrypt.compareSync(req.body.password, user.password))) {
    console.log('validateUser redirecting to signup');
    res.status(401).end();
  } else {
    next();
  }
};

userController.createUser = (req, res, next) => {
  const password = bcrypt.hashSync(req.body.password, SALT_WORK_FACTOR);
  console.log(req.body, password);
  db.query('INSERT INTO users (name, username, password) VALUES ($1, $2, $3)',
    [req.body.name, req.body.username, password])
    .then(() => {
      res.locals.user = {
        name: req.body.name, 
        username: req.body.username,
        password: password,
      };
      next();
    })
    .catch(err => console.error('Error creating user', err.stack));
};

// userController.deleteUser = (req, res, next) => {
//   db.query('DELETE FROM users WHERE username = $1', [req.body.username])
//     .then()
// };

module.exports = userController;
