const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "organization",
});

con.connect((err) => {
  if (err) throw err;
  const sql = "select * from employees";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});
