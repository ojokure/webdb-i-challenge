const express = require("express");

const db = require("../data/dbConfig");

const accountRouter = express.Router();

accountRouter.get("/", (req, res) => {
  db.select("*")
    .from("accounts")
    .then(accounts => {
      res.status(200).json(accounts);
    })
    .catch(error => {
      res.status(500).json({
        message: error.message
      });
    });
});

accountRouter.get("/:id", async (req, res) => {
  try {
    const account = await db
      .select("*")
      .where({ id: req.params.id })
      .from("accounts");
    res.status(200).json({
      account
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = accountRouter;
