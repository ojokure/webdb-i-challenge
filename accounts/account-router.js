const express = require("express");

const db = require('../data/dbConfig');

const accountRouter = express.Router();

accountRouter.get("/", (req, res) => {});

module.exports = accountRouter;
