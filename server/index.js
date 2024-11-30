const { Pool } = require("pg");
const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL + "?sslmode=require",
});

app.get("/users", async (req, res) => {
  const client = await pool.connect();

  try {
    const { rows } = await client.query("SELECT * FROM users");
    res.json({ msg: "Ok", data: rows });
  } catch (error) {
    res.json({ msg: error.msg });
  } finally {
    client.release();
  }
});

app.listen(process.env.PORT, () =>
  console.log("Server is running on port 5000")
);
