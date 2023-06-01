const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "organization",
});

con.connect((err) => {
  if (err) throw err;
  const sql = "delete from roles where role_id = ?";
  const values = ["sec"];
  con.query(sql, values, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});
