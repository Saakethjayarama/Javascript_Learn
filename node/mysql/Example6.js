const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "organization",
});

con.connect((err) => {
  if (err) throw err;
  const sql = "insert into roles(role_id, rele_desc) values ?";
  var values = [
    ["sec", "security"],
    ["ext", "externals"],
    ["dev", "developers"],
  ];
  con.query(sql, [values], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});
