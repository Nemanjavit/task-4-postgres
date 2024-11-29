const { Pool } = require("pg");
const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL + "?sslmode=require",
});

pool.connect((err) => {
  if (err) throw err;
  console.log("Connect to PostgreSQL successfully!");
});

app.get("/users", async (req, res) => {
  try {
    const { rows } = await db.query("select * from users");
    res.json({ msg: "Ok", data: rows });
  } catch (error) {
    res.json({ msg: error.msg });
  }
});

app.listen(process.env.PORT, () =>
  console.log("Server is running on port 5000")
);
