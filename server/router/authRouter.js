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
    const created_at = new Date();

    const result = await client.query(
      "INSERT INTO users (email, hashed_password, created_at) VALUES ($1, $2, $3) RETURNING *",
      [email, hashed_password, created_at]
    );

    res
      .status(201)
      .json({ msg: "User created successfully", user: result.rows[0] });
  } catch (error) {
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
      await client.query(`UPDATE users SET last_seen = NOW() where email=$1`, [
        email,
      ]);
      req.session.user = {
        id: findUser.rows[0].id,
        email: findUser.rows[0].email,
      };
      res.status(200).json({ msg: "Your are logged in", user: email });
    } else {
      res.status(500).json({ msg: "Wrong username or passowrd!" });
    }
  } else {
    res.status(500).json({ msg: "Wrong username or passowrd!" });
  }
});

router.get("/login", async (req, res) => {
  if (req.session.user) {
    res.json({ loggedIn: true, user: req.session.email });
  } else {
    res.json({ loggedIn: false, msg: "You are not logged in!" });
  }
});

router.post("/logout", async (req, res) => {
  if (req.session.user) {
    req.session.destroy((error) => {
      if (error) {
        return res.status(500).json({ msg: "Log out failed" });
      }
      res.clearCookie("sid");
      res.status(200).json({ msg: "Logged out", loggedIn: false });
    });
  } else {
    res.status(400).json({ msg: "No active session" });
  }
});
module.exports = router;
