const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "organization",
});

con.connect((err) => {
  if (err) throw err;
  const sql = "update roles set role_id = ? where role_id = ?";
  const values = ["devs", "dev"];
  con.query(sql, values, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});
