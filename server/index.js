const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database");
const authRouter = require("./router/authRouter");

require("dotenv").config();

app.use(
  cors({
    methods: ["POST", "GET", "PUT", "DELETE"],
    origin: "https://task-4-postgres-uleg.vercel.app",
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

app.use("/auth", authRouter);

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

app.listen(process.env.PORT || 4000, () =>
  console.log("Server is running on port 5000")
);
