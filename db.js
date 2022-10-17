const mysql = require("mysql2");

const pool = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  database: "project",
  password: "Rooter_zad07an"
});

module.exports = pool