const express = require("express");
const router = express.Router();
const pool = require("../database");

router.get("/forms", async (req, res) => {
  const client = await pool.connect();
  try {
  } catch (error) {
    res.status(500).send(error.message);
  } finally {
    client.release();
  }
});

router.post("/forms", async (req, res) => {
  const client = await pool.connect();
  try {
  } catch (error) {
    res.status(500).send(error.message);
  } finally {
    client.release();
  }
});

router.get("/forms/:id", async (req, res) => {
  const client = await pool.connect();
  try {
  } catch (error) {
    res.status(500).send(error.message);
  } finally {
    client.release();
  }
});
