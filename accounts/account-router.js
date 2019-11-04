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

accountRouter.post("/", async (req, res) => {
  try {
    const newAccount = await db
      .select("*")
      .from("accounts")
      .insert({
        name: req.body.name,
        budget: req.body.budget
      })
      .where({ id: req.params.id });

    res.json("New account got created with an id of " + newAccount[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

accountRouter.put("/:id", async (req, res) => {
  try {
    const updated = await db
      .select("*")
      .from("accounts")
      .where({ id: req.params.id })
      .update({
        name: req.body.name,
        budget: req.body.budget
      });

    res.status(200).json(updated + "account(s) edited succesfully");
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

accountRouter.delete("/:id", (req, res) => {
  db.select("*")
    .from("accounts")
    .where({ id: req.params.id })
    .del()
    .then(deletedCount => {
      res.json(deletedCount + " account(s) got deleted!!");
    })
    .catch(error => {
      res.status(500).json({ message: error.message });
    });
});

module.exports = accountRouter;
