const mysql = require("mysql");

const getConnection = () => {
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "college",
  });
  return con;
};

module.exports = getConnection;
