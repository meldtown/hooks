const path = require('path');
const fs = require('fs');

const {argv} = require('yargs');
const cors = require('cors');
const express = require('express');

const users = require('./db');

const {port = 3333} = argv;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`Listening on ${port} port`));

app.get('/users', (req, res) => {
  res.send(users);
});


