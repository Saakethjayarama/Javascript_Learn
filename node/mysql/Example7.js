const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "organization",
});

con.connect((err) => {
  if (err) throw err;
  const sql = "select * from roles";

  con.query(sql, (err, result) => {
    if (err) throw err;
    result.forEach((element) => {
      console.log(element["role_id"]);
    });
  });
});
