const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database");
const authRouter = require("./router/authRouter");
const templatesRouter = require("./router/templatesRouter");
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);

require("dotenv").config();
app.use(express.json());

app.use(
  cors({
    methods: ["POST", "GET", "PUT", "DELETE"],
    origin: "https://task-4-postgres-uleg.vercel.app",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(
  session({
    store: new pgSession({
      pool,
    }),
    secret: process.env.SECRET_COOKIE,
    credentials: true,
    name: "sid",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 3600000,
      secure: true,
      httpOnly: true,
      sameSite: "none",
    },
  })
);

app.use("/auth", authRouter);
app.use("/", templatesRouter);

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

app.listen(4000, () => console.log("Server is running on port 4000"));
