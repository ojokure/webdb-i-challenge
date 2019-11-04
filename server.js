const express = require('express');

const accountRouter = require('./accounts/account-router')

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.use('/api/accounts', accountRouter);

server.get('/', (req, res) => {
    res.send('<h3> Accounts </h3>');
  });

module.exports = server;