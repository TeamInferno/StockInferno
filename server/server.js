const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
// const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + './../'));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname + '/index.html')));

app.listen(3000);