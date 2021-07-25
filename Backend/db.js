const Pool = require("pg").Pool;

require("dotenv").config();

const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASS,
  host: "localhost",
  port: process.env.PORT,
  database: "hh",
});

module.exports = pool;
