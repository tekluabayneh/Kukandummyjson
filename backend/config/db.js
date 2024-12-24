const mysql2 = require("mysql2");
const db = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "Kukandummyjson",
  port: 8889,
});

module.exports = db.promise();
