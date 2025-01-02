const express = require("express");
const router = express.Router();
const pool = require("../database");

router.get("/admin/users", async (req, res) => {
  const client = await pool.connect();
  try {
  } catch (error) {
    res.status(500).send(error.message);
  } finally {
    client.release();
  }
});

router.put("/admin/users", async (req, res) => {
  const client = await pool.connect();
  try {
  } catch (error) {
    res.status(500).send(error.message);
  } finally {
    client.release();
  }
});
