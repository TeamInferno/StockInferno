const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
// const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + './../public')));
app.use(express.static(path.join(__dirname + './../build')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + './../splash.html')));
app.get('/home', (req, res) => res.sendFile(path.join(__dirname + './../home.html')));

app.listen(3000);