const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

con.connect((err) => {
  if (err) throw err;
  const sql = "create database techie";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});
