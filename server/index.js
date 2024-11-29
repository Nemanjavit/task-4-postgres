const express = require("express");
const db = require("./database");
const app = express();

require("dotenv").config();

app.use(express.json());

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
