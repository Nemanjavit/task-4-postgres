const express = require("express");
const sha3_256 = require("js-sha256");
const router = express.Router();
const pool = require("../database");

router.post("/signup", async (req, res) => {
  const client = await pool.connect();
  const { email, password } = req.body;

  try {
    const userExist = await client.query(
      "SELECT email FROM users WHERE email=$1",
      [email]
    );

    if (userExist.rows.length > 0) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    const hashed_password = await sha3_256(password);
    const result = await client.query(
      "INSERT INTO users (email, hashed_password) VALUES ($1, $2) RETURNING *",
      [email, hashed_password]
    );

    res
      .status(201)
      .json({ msg: "User created successfully", user: result.rows[0] });
  } catch (error) {
    console.error("Error inserting user:", error.message);
    res.status(500).json({ msg: "Error creating user", error: error.message });
  } finally {
    client.release();
  }
});

router.post("/login", async (req, res) => {
  const client = await pool.connect();
  const { email, password } = req.body;

  const findUser = await client.query(
    "SELECT id, email, hashed_password FROM users WHERE users.email=$1",
    [email]
  );

  if (findUser.rowCount > 0) {
    const isPasswordCorrect =
      sha3_256(password) === findUser.rows[0].hashed_password;

    if (isPasswordCorrect) {
      res.status(200).json({ msg: "Your are logged in", user: email });
    } else {
      res.status(500).json({ msg: "Wrong username or passowrd!" });
    }
  } else {
    res.status(500).json({ msg: "Wrong username or passowrd!" });
  }
});

module.exports = router;
