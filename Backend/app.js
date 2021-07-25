const express = require("express");
const app = express();
const cors = require("cors");

const pool = require("./db");

app.use(cors());
app.use(express.json());

app.post("/volunteer", async (req, res) => {
  try {
    const { vol_name, vol_about } = req.body;
    const newVol = await pool.query(
      "INSERT INTO volunteer (vol_name, vol_about) VALUES($1, $2) RETURNING *",
      [vol_name, vol_about]
    );

    res.json(newVol.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/volunteer", async (req, res) => {
  try {
    const allVols = await pool.query("SELECT * FROM volunteer");
    res.json(allVols.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/volunteer/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getVol = await pool.query("SELECT * FROM volunteer WHERE vol_id=$1", [
      id,
    ]);

    res.json(getVol.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.put("/volunteer/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { vol_name, vol_about } = req.body;
    const updateVol = await pool.query(
      "UPDATE volunteer SET (vol_name, vol_about) = ($1,$2) WHERE vol_id= $3",
      [vol_name, vol_about, id]
    );

    res.json("Your profile was updated");
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    const { user_name, user_about } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (user_name, user_about) VALUES($1,$2) RETURNING *",
      [user_name, user_about]
    );

    res.json(newUser.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/users", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getUser = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      id,
    ]);
    res.json(getUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { user_name, user_about } = req.body;
    const updateUser = await pool.query(
      "UPDATE users SET(user_name, user_about) = ($1,$2) WHERE user_id=$3",
      [user_name, user_about, id]
    );
    res.json("User was updated");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(3001, () => {
  console.log("Started on 3001");
});
