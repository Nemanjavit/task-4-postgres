const express = require("express");
const pool = require("../database");
const router = express.Router();

router.get("/templates", async (req, res) => {
  const client = await pool.connect();
  try {
  } catch (error) {
    res.status(500).send(error.message);
  } finally {
    client.release();
  }
});

router.get("/templates/:id", async (req, res) => {
  const client = await pool.connect();
  try {
  } catch (error) {
    res.status(500).send(error.message);
  } finally {
    client.release();
  }
});

router.post("/templates", async (req, res) => {
  const client = await pool.connect();
  try {
  } catch (error) {
    res.status(500).send(error.message);
  } finally {
    client.release();
  }
});

router.put("/templates/:id", async (req, res) => {
  const client = await pool.connect();
  try {
  } catch (error) {
    res.status(500).send(error.message);
  } finally {
    client.release();
  }
});

router.delete("/templates/:id", async (req, res) => {
  const client = await pool.connect();
  try {
  } catch (error) {
    res.status(500).send(error.message);
  } finally {
    client.release();
  }
});

module.exports = router;
