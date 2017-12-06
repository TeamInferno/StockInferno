const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const userController = require('./userController')

const app = express();
// const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + './../public')));
app.use(express.static(path.join(__dirname + './../build')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + './../splash.html')));
app.get('/signup', (req, res) => res.sendFile(path.join(__dirname + './../signup.html')));
app.get('/home', (req, res) => res.sendFile(path.join(__dirname + './../home.html')));


//** Login/Signup API Routes **************************************/
app.post('api/login',
  userController.getUser,
  userController.validateUser,
  (req, res) => {
    console.log(req.body.username, req.body.password);
    res.status(200).redirect('/home')
  }
);

app.post('api/signup',
  userController.createUser,
  (req, res) => {
    res.status(200).redirect('/home')
  }
);

//** Stock API Routes *********************************************/
app.get('/api/stocks/:symbol/:timePeriod', (req, res) => {
  stockAPIController.getData,
  console.log()
})

app.listen(3000);